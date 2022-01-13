import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .navbar {
    color: #bbb;
    font-family: cursive;
    padding: 10px
  }
  li> a.active{
    color: #df691a;
  }
  `]
})
export class NavbarComponent implements OnInit {

  constructor(private toastr : ToastrService, public auth:AuthService) { }

  ngOnInit(): void {
  }
  handelthumbnail(){
    this.toastr.success('Hello '+ this.auth.currentUser?.userName)
  }
}
