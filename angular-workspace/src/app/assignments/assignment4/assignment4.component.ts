import { Component, OnInit } from '@angular/core';
import { page as PageData } from "./assignment4.component.pagedata";

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.rendered.html',
  styleUrls: ['./assignment4.component.scss']
})
export class Assignment4Component implements OnInit {
  page = PageData;

  constructor() {
  }

  ngOnInit() {
  }
}
