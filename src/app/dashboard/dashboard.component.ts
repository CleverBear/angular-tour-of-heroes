import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
