
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
constructor(private authService: AuthService , private route: Router){

}

login(formValue: any){
 this.authService.loginUser(formValue.userName, formValue.password)
 this.route.navigate(['/events'])
}


cancel(){
    this.route.navigate(['/events'])
}
}
