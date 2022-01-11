import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
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