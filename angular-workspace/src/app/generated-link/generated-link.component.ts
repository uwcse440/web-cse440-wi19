import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generated-link',
  templateUrl: './generated-link.component.html',
  styleUrls: ['./generated-link.component.scss']
})
export class GeneratedLinkComponent implements OnInit {
  @Input() linkText: string;
  @Input() linkHREF: string;

  constructor() {
  }

  ngOnInit() {
  }

  isExternal(): boolean {
    return ( this.linkHREF.startsWith('http:')
          || this.linkHREF.startsWith('https:')
    );
  }

  isInternal(): boolean {
    return !(this.isExternal());
  }
}
