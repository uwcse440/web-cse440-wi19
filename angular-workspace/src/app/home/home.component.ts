import { Component, OnInit } from '@angular/core';
import { page as PageData } from "../home/home.component.pagedata";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.rendered.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = PageData;

  constructor() {
  }

  ngOnInit() {
  }
}
