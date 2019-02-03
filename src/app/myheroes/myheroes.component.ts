import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myheroes',
  templateUrl: './myheroes.component.html',
  styleUrls: ['./myheroes.component.css']
})
export class MyheroesComponent implements OnInit {

	hero = {
		id: 1,
		name: 'test'
	}
  constructor() { }

  ngOnInit() {
  }

}
