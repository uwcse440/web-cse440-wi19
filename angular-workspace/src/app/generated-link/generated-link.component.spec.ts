import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedLinkComponent } from './generated-link.component';

describe('GeneratedLinkComponent', () => {
  let component: GeneratedLinkComponent;
  let fixture: ComponentFixture<GeneratedLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
