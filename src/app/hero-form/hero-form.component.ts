import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
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

  hero: {id:number, name:string}
  
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroes[id - 1];
  }

  goBack(): void {
    this.location.back();
  }

}
