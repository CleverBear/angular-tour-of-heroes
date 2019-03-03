import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

	@Input() hero: Hero;
	@Output() voted = new EventEmitter<number>();
	vote(agreed: number) {
    this.voted.emit(this.hero.id);
	}
  constructor() { }

  ngOnInit() {
  }

}
