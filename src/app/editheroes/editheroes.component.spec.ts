import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditheroesComponent } from './editheroes.component';

describe('EditheroesComponent', () => {
  let component: EditheroesComponent;
  let fixture: ComponentFixture<EditheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
