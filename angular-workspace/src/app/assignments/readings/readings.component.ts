import { Component, OnInit } from '@angular/core';
import { page as PageData } from "./readings.component.pagedata";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.rendered.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {
  page = PageData;

  constructor() { }

  ngOnInit() {
  }

}
