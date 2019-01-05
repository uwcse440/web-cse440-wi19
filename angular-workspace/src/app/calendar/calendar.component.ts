import { Component, OnInit } from '@angular/core';
import {calendar, calendar as CalendarData} from '../../data/calendardata';

import * as Moment from 'moment';
import * as MomentRange from 'moment-range';
const moment = MomentRange.extendMoment(Moment);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.rendered.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendar = CalendarData;

  constructor() {
  }

  ngOnInit() {
  }

  datesOfInstructionByWeek() {
    return moment.range(
      calendar.datesOfInstruction.start,
      calendar.datesOfInstruction.end
    ).snapTo('weeks').by('weeks');
  }

  datesOfWeekdaysForWeek(currentWeek: Date) {
    return moment.range(
      moment(moment(currentWeek)).add('1', 'days'),
      moment(moment(currentWeek)).add('5', 'days')
    ).by('days');
  }

  moment(currentDay: Date) {
    return moment(currentDay);
  }
}
