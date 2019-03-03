import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgxSpinnerService } from 'ngx-spinner';

class ReturnValue {
  id: number;
  clicked: boolean;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  clicklog:String[] = [];
  @Input()  hero: object;
 
  onVoted(agreed: ReturnValue) {
    var keys = Object.keys(this.heroes);
    for (var i = keys.length - 1; i >= 0; i--) {
      if (agreed.id == this.heroes[i].id) {
        this.heroes[i].clicked = agreed.clicked;
        break;
      }
    }
    this.clicklog.push("Heroes Log: " + agreed.id);
  }
  constructor(private heroService: HeroService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getHeroes();
    this.spinner.show();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {this.heroes = heroes; this.spinner.hide();});
  }

  add(name: string): void {
    name = name.trim();
    this.spinner.show();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.spinner.hide();
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/