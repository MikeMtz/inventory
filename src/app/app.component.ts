import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory';
  themes = ['dark','light','red','blue'];
  theme = 'dark';

  changeTheme() {
    let idx = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

    this.theme = this.themes[idx];
  }
}
