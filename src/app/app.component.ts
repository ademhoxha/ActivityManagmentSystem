import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css',  './variables.css', './app-table.css', './colors.css', './app-card.css', './main.css' ]
})
export class AppComponent {
  title = 'app';
}
