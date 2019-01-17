import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentContributionStatementComponent } from './assignment-contribution-statement.component';

describe('AssignmentContributionStatementComponent', () => {
  let component: AssignmentContributionStatementComponent;
  let fixture: ComponentFixture<AssignmentContributionStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentContributionStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentContributionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
