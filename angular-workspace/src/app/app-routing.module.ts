import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { AssignmentsComponent } from "./assignments/assignments.component";

import { Assignment0Component } from "./assignments/assignment0/assignment0.component";
import { Assignment1Component } from "./assignments/assignment1/assignment1.component";
import { Assignment2Component } from "./assignments/assignment2/assignment2.component";
import { Assignment3Component } from "./assignments/assignment3/assignment3.component";
import { Assignment4Component } from "./assignments/assignment4/assignment4.component";
import { ReadingsComponent } from "./assignments/readings/readings.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'assignments',
    component: AssignmentsComponent,
    children: [
      { path: 'assignment0', component: Assignment0Component },
      { path: 'assignment1', component: Assignment1Component },
      { path: 'assignment2', component: Assignment2Component },
      { path: 'assignment3', component: Assignment3Component },
      { path: 'assignment4', component: Assignment4Component },
      { path: 'readings', component: ReadingsComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
