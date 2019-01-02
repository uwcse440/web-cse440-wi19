import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDueTextComponent } from './assignment-due-text.component';

describe('AssignmentDueTextComponent', () => {
  let component: AssignmentDueTextComponent;
  let fixture: ComponentFixture<AssignmentDueTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentDueTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
