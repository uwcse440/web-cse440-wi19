import { Component, OnInit } from '@angular/core';
import { page as PageData } from './assignment0.pagedata';

@Component({
  selector: 'app-assignment0',
  template: './assignment0.component.rendered.html',
  styleUrls: ['./assignment0.component.scss']
})
export class Assignment0Component implements OnInit {
  page = PageData;

  constructor() {
  }

  ngOnInit() {
  }
}
