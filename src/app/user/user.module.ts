import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    
    {
      provide: 'canDeactivateCreateEvent',
       useValue: checkDirty
     }
  ]
})

export class UserModule { }

export function checkDirty(component : ProfileComponent){
  if (component.isDirty) {
    return window.confirm('leave profile page without save change?'
    )
  }
  return true;
}