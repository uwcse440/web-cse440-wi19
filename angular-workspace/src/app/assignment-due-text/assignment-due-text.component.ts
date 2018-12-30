import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from "util";

@Component({
  selector: 'app-assignment-due-text',
  templateUrl: './assignment-due-text.component.html',
  styleUrls: ['./assignment-due-text.component.scss']
})
export class AssignmentDueTextComponent implements OnInit {
  @Input() dueText: string;

  constructor() {
  }

  ngOnInit() {
  }

  isValid(): boolean {
    return (
      (
        !isNullOrUndefined(this.dueText)
      ) && (
        this.dueText != ''
      )
    );
  }
}
