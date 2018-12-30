import { Component, OnInit } from '@angular/core';
import { page as PageData } from './assignment1.component.pagedata';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.rendered.html',
  styleUrls: ['./assignment1.component.scss']
})
export class Assignment1Component implements OnInit {
  page = PageData;

  constructor() {
  }

  ngOnInit() {
  }
}
