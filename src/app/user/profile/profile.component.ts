import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    em{
        color:#df691a;
        float: right
    }
    .error input {
      background-color:#efd4c3
    }`]
})
export class ProfileComponent implements OnInit {
  isDirty: boolean= true;
  profileForm!: FormGroup;
  mouseover: boolean = false;
  private firstName: FormControl | undefined
  private lastName: FormControl | undefined
  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser?.firstName, Validators.required)
    this.lastName = new FormControl(this.auth.currentUser?.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }


  canceled(){
    this.route.navigate(['/events'])
  }

  saveprofile(value: any){
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(value.firstName, value.lastName)
      this.route.navigate(['/events'])
    }
  }



  validatedLastName(){
    return this.lastName?.valid || this.lastName?.touched
  }


  validatedFirstName(){
   return this.firstName?.valid || this.firstName?.touched
  }
}
