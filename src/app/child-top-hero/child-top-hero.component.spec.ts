import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTopHeroComponent } from './child-top-hero.component';

describe('ChildTopHeroComponent', () => {
  let component: ChildTopHeroComponent;
  let fixture: ComponentFixture<ChildTopHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTopHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTopHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
