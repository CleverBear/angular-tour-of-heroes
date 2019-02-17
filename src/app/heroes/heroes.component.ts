import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Array<{id:number, name:string}> = [
    {
      id:1,
      name: "David"
    },
    {
      id:2,
      name: "Stephen"
    },
  ];
  myHero: {id:number, name:string}
	
  constructor() { }

  ngOnInit() {
    this.updateLink(1);
  }

  updateLink(id:number) {
    this.myHero = this.heroes[id - 1];
  }

}
