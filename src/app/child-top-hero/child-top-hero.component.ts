import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';

export class ReturnValue {
  id: number;
  clicked: boolean;
}

@Component({
  selector: 'app-child-top-hero',
  templateUrl: './child-top-hero.component.html',
  styleUrls: ['./child-top-hero.component.css']
})

export class ChildTopHeroComponent implements OnInit {

	@Input() hero: Hero;
	@Output() voted = new EventEmitter<ReturnValue>();
	vote(hero:Hero) {
    const returnvalue:ReturnValue = { id: hero.id, clicked: !hero.clicked };
    this.voted.emit(returnvalue);
	}
  constructor() { }

  ngOnInit() {
  }

}
