import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/store/app.state';
// import { autoLogout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout(event: Event) {
    event.preventDefault();
    // this.store.dispatch(autoLogout());
  }
}
