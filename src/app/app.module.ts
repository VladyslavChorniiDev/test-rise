import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '@modules/alert/alert.module';
import { LayoutsModule } from '@modules/layouts/layouts.module';
import { AppInitService } from '@services/app-init.service';
import { IconsRegistrarService } from '@services/icons-registrar.service';
import { AppRoutingModule } from './app-routing.module';


export function initializeAppSteps(appInitService: AppInitService): any {
  return (): Promise<any> => {
    return Promise.all([
      appInitService.init()
    ]);
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    LayoutsModule,
    AppRoutingModule,
    AlertModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppInitService,
    IconsRegistrarService,
    { provide: APP_INITIALIZER, useFactory: initializeAppSteps, deps: [AppInitService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
