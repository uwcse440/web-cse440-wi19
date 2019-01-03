import { Component, OnInit } from '@angular/core';
import { page as PageData } from "./assignment2.component.pagedata";

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.rendered.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {
  page = PageData;

  constructor() {
  }

  ngOnInit() {
  }
}
