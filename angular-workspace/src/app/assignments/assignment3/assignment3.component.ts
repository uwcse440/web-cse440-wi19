import {AfterViewInit, Component, OnInit} from '@angular/core';
import {page as PageData} from "./assignment3.component.pagedata";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.rendered.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements AfterViewInit, OnInit {
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
