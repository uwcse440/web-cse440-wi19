import { Component, OnInit } from '@angular/core';

// Markdown code until I get this organized into a reusable component

import externalContent from './home.content.md';
import externalTemplate from './home.component.html';

    const testwork = externalContent;
    console.log(testwork);
    const testwork2 = externalTemplate;
    console.log(testwork2);

    /*
let processedTemplate: string = `
  <ng-template #content>
    ${externalContent}
  </ng-template>
  ${externalTemplate}
`;
*/

// End Markdown code

@Component({
  selector: 'app-home',
  template: testwork2,
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
