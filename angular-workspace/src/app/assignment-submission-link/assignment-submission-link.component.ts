import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from "util";

@Component({
  selector: 'app-assignment-submission-link',
  templateUrl: './assignment-submission-link.component.html',
  styleUrls: ['./assignment-submission-link.component.scss']
})
export class AssignmentSubmissionLinkComponent implements OnInit {
  @Input() linkSubmission: string;

  constructor() {
  }

  ngOnInit() {
  }

  isValid(): boolean {
    return (
      (
        !isNullOrUndefined(this.linkSubmission )
      ) && (
        this.linkSubmission.startsWith('http:')
        || this.linkSubmission.startsWith('https:')
      )
    );
  }
}
