import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    em{
        color: crimson;
        float: right
    }`]
})
export class ProfileComponent implements OnInit {
  isDirty: boolean= true;
  profileForm!: FormGroup;
  mouseoverlogin: boolean = false;
  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
    let firstName = new FormControl(this.auth.currentUser?.firstName, Validators.required)
    let lastName = new FormControl(this.auth.currentUser?.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
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

}
