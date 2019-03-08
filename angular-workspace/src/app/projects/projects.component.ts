import { Component, OnInit } from '@angular/core';
import { projects as ProjectsData } from '../../data/projectsdata';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.rendered.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = ProjectsData;

  constructor() {
  }

  ngOnInit() {
  }
}
