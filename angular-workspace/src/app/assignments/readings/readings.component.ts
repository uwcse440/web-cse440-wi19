import {AfterViewInit, Component, OnInit} from '@angular/core';
import { page as PageData } from "./readings.component.pagedata";
import {Router} from "@angular/router";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.rendered.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements AfterViewInit, OnInit {
  page = PageData;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // If we're initialized with an anchor, navigate to that anchor
    let fragment = this.router.parseUrl(this.router.url).fragment;
    if (fragment) {
      let element = document.querySelector('#' + fragment);
      if (element) {
        element.scrollIntoView();
      }
    }
  }
}
