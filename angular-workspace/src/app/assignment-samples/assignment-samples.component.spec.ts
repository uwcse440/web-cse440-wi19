import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSamplesComponent } from './assignment-samples.component';

describe('AssignmentSamplesComponent', () => {
  let component: AssignmentSamplesComponent;
  let fixture: ComponentFixture<AssignmentSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
