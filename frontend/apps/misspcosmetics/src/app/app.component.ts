import { Component, OnInit } from '@angular/core';
import { UsersService } from '@misspscents/users';


@Component({
  selector: 'misspcosmetics-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.initAppSession();
  }
  title = 'misspcosmetics';
}
