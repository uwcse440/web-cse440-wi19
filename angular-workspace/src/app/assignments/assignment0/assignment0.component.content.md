# Assignment 0: Introduction Slide

## Overview

Submit an informal slide that will help us as we get to know you:

- Picture
- Name (e.g., formal, preferred, pronouns)
- Academics (e.g., majors, minors, career goals)
- Year (e.g., 1,2,3,4,5,6,...)
- Hometown
- Interesting Fact or "What I did on my ..."

Please keep it clean, and understand that your classmates may at some point see this flash card.

For example, your slide might be similar to our introduction slides in the first lecture.

### Submission

Due: {{ page.date_assignment_0 }}.

One page in PDF format. Submit via Canvas here:

<html>
  <ng-template [ngIf]="page.link_assignment_0" [ngIfElse]="missingLink">
    [{{ page.link_assignment_0 }}]({{ page.link_assignment_0 }})
  </ng-template>
  <ng-template #missingLink>
    Link to be added
  </ng-template>
</html>

### Grading

This assignment will be graded on a scale of __0__ points.
