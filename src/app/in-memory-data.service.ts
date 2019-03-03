import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 11, name: 'Mr. Nice1', clicked: false },
  { id: 12, name: 'Narco', clicked: false },
  { id: 13, name: 'Bombasto', clicked: false },
  { id: 14, name: 'Celeritas', clicked: false },
  { id: 15, name: 'Magneta', clicked: false },
  { id: 16, name: 'RubberMan', clicked: false },
  { id: 17, name: 'Dynama', clicked: false },
  { id: 18, name: 'Dr IQ', clicked: false },
  { id: 19, name: 'Magma', clicked: false },
  { id: 20, name: 'Tornado', clicked: false }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/