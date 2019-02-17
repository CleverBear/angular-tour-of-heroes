import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {

  hero = {
    id: 1,
    name: 'test'
  }
  constructor() {

   }

  ngOnInit() {
  }

}
