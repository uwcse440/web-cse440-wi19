import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmissionLinkComponent } from './assignment-submission-link.component';

describe('AssignmentSubmissionLinkComponent', () => {
  let component: AssignmentSubmissionLinkComponent;
  let fixture: ComponentFixture<AssignmentSubmissionLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSubmissionLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSubmissionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
