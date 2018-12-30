import { Component, Input, OnInit } from '@angular/core';
import { site as SiteData } from '../../data/sitedata';

@Component({
  selector: 'app-assignment-samples',
  templateUrl: './assignment-samples.component.html',
  styleUrls: ['./assignment-samples.component.scss']
})
export class AssignmentSamplesComponent implements OnInit {
  site = SiteData;

  @Input() sampleToLink: string;

  constructor() {
  }

  ngOnInit() {
  }
}
