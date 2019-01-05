import * as moment from 'moment';

class CalendarData {
  datesOfInstruction = {
    start: moment('Sun 2019-01-06', 'ddd YYYY-MM-DD'),  // Must be a Sunday
    end:   moment('Sat 2019-03-23', 'ddd YYYY-MM-DD')   // Must be a Saturday
  };
}

export const calendar = new CalendarData();
