import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public router: Router) {}

  //Navigate to Movies View
  toMovies() {
    this.router.navigate(['movies']);
  }

  //Navigate to Profile View
  toProfile() {
    this.router.navigate(['profile'])
  }

  //Logout the current user
  logOut() {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}
