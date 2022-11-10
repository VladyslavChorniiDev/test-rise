import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';
import { LoaderModule } from '@modules/loader/loader.module';
import { ProfileInfoModule } from '@modules/profile-info/profile-info.module';
import { ProfilePictureModule } from '@modules/profile-picture/profile-picture.module';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { VerifyPopupComponent } from './popups/verify-popup/verify-popup.component';
import { ProfileCreatingPopupComponent } from './popups/profile-creating-popup/profile-creating-popup.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    VerifyPopupComponent,
    ProfileCreatingPopupComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    ProfilePictureModule,
    FormElementsModule,
    ReactiveFormsModule,
    MatDialogModule,
    LoaderModule,
    ProfileInfoModule
  ]
})
export class RegistrationModule { }
