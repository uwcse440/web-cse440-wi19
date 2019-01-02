import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment0Component } from './assignment0.component';

describe('Assignment0Component', () => {
  let component: Assignment0Component;
  let fixture: ComponentFixture<Assignment0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
