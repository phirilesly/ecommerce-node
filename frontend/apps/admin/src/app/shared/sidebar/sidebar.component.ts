import { Component } from '@angular/core';
import { AuthService } from '@misspscents/users';


@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}

  logoutUser() {
    this.authService.logout();
  }
}
