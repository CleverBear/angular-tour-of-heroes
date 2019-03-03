
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgxSpinnerService } from 'ngx-spinner';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  clicklog:String[] = [];
  @Input()  hero: object;
 
  onVoted(agreed: number) {
    this.clicklog.push("Dashboard Log: " + agreed);
  }


  constructor(private heroService: HeroService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getHeroes();
    this.spinner.show();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {this.heroes = heroes.slice(1, 5); this.spinner.hide();});
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/