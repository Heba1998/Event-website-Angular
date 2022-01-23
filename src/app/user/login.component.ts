
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em{
        color: crimson;
        float: right
    }`]
})

export class LoginComponent{
userName: any
password: any
mouseoverlogin: boolean = false;
loginInvalid = false;

    constructor(private authService: AuthService , private router: Router){}
    

    login(formValue:any){
    this.authService.loginUser(formValue.userName, formValue.password).subscribe(resp =>{
        if(!resp){
            this.loginInvalid = true;
        }else{
            this.router.navigate(['events'])
        }
    })
    //  this.router.navigate(['events'])
    //  console.log(formValue.userName, formValue.password)
    }


    cancel(){
        this.router.navigate(['events'])
    }
}
