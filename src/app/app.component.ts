import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  topHeros = [1, 2, 3, 4];
  heroList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
