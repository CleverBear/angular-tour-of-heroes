import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editheroes',
  templateUrl: './editheroes.component.html',
  styleUrls: ['./editheroes.component.css']
})
export class EditheroesComponent implements OnInit {

	hero = {
		id: 1,
		name: 'test'
	}
  constructor() { }

  ngOnInit() {
  }

}
