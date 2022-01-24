import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.service';
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
  isDirty= true;
  profileForm!: FormGroup;
  mouseoverlogin = false;
  mouseover=false;
  private firstName: FormControl = new FormControl;
  private lastName: FormControl = new FormControl;


  constructor(private route: Router, private auth: AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    // angular.module('app').service('myservice', ) // if we want to use angular 1  // we use angular 2 now


  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
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
      this.toastr.success('profile saved ')
    }
  }



  validatedLastName(){
    return this.lastName.valid || this.lastName.untouched && !this.mouseover
  }


  validatedFirstName(){
   return this.firstName.valid || this.firstName.untouched && !this.mouseover
  }
}
