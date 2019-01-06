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

  getAssignmentsForDay(currentDay: Date) {
    return calendar.assignments.filter(function (assignmentCurrent) {
      return moment(assignmentCurrent.date).isSame(moment(currentDay));
    });
  }

  getHolidaysForDay(currentDay: Date) {
    return calendar.holidays.filter(function (holidayCurrent) {
      return moment(holidayCurrent.date).isSame(moment(currentDay));
    });
  }

  getLecturesForDay(currentDay: Date) {
    return calendar.lectures.filter(function (lectureCurrent) {
      return moment(lectureCurrent.date).isSame(moment(currentDay));
    });
  }

  getSectionsForDay(currentDay: Date) {
    return calendar.sections.filter(function (sectionCurrent) {
      return moment(sectionCurrent.date).isSame(moment(currentDay));
    });
  }

  moment(currentDay: Date) {
    return moment(currentDay);
  }
}
