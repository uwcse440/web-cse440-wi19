import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generated-link',
  templateUrl: './generated-link.component.html',
  styleUrls: ['./generated-link.component.scss']
})
export class GeneratedLinkComponent implements OnInit {
  @Input() linkHREF: string;

  constructor() {
  }

  ngOnInit() {
  }

  isAnchor(): boolean {
    return (this.linkHREF.startsWith('#'));
  }

  isExternal(): boolean {
    return (
      this.linkHREF.startsWith('http:')
      || this.linkHREF.startsWith('https:')
    );
  }

  isFile(): boolean {
    return (
      this.linkHREF.toLowerCase().endsWith('.pdf')
      || this.linkHREF.toLowerCase().endsWith('.mp4')
    );
  }

  isPageWithAnchor(): boolean {
    let components = this.linkHREF.split('#');

    return (
      components.length == 2
      && components[0].length > 0
      && components[1].length > 0
    );
  }
}
