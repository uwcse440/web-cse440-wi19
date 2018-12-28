import { Component, OnInit } from '@angular/core';

// Markdown code until I get this organized into a reusable component

import externalContent from './assignments.content.md';
import externalTemplate from './assignments.component.html';

import * as marked from 'marked';

let renderer = new marked.Renderer();
renderer.link = (href: string, title: string, text: string) => {
  const isExternalLink = href.startsWith('http') || href.startsWith('//');

  if (isExternalLink) {
    return `<a href="${href}">${text}</a>`;
  } else {
    return `<a routerLink="${href}">${text}</a>`;
  }
};
// let processedContent = marked.parse(externalContent, { renderer: renderer });
let processedContent = 'cat';

let processedTemplate: string = `
  <ng-template #content>
    ${processedContent}
  </ng-template>
  ${externalTemplate}
`;

// End Markdown code

@Component({
  selector: 'app-assignments',
  template: processedTemplate,
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
