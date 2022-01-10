import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';

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
    color: #FFDF01;
  }
  `]
})
export class NavbarComponent implements OnInit {

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  handelthumbnail(){
    this.toastr.success('Hello Haboosh 💃')
  }
}
