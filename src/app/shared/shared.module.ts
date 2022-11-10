import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { UserNamePipe } from './pipes/user-name.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    UserNamePipe,
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
    MatIconModule,
    UserNamePipe,
  ]
})
export class SharedModule { }
