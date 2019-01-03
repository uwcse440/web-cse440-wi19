import { Component, OnInit } from '@angular/core';
import {page as PageData} from "./assignment3.component.pagedata";

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.rendered.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {
  page = PageData;

  constructor() { }

  ngOnInit() {
  }

}
