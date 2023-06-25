import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public router: Router) {}

  toMovies() {
    this.router.navigate(['movies']);
  }

  toProfile() {
    this.router.navigate(['profile'])
  }

  logOut() {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}
