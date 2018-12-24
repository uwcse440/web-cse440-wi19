import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMarkdownComponent } from './dynamic-markdown.component';

describe('DynamicMarkdownComponent', () => {
  let component: DynamicMarkdownComponent;
  let fixture: ComponentFixture<DynamicMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
