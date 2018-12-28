import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { Assignment0Component } from './assignments/assignment0/assignment0.component';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { ReadingsComponent } from './assignments/readings/readings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    CalendarComponent,
    AssignmentsComponent,
    Assignment0Component,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    ReadingsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-workspace'}),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
