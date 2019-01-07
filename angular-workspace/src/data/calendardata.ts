import * as moment from 'moment';
import { Moment } from "moment";

interface Location {
  time: string;
  location: string;
}

interface Lecture {
  date: Date|Moment;
  name?: string;
  location?: Location[];
  locationName?: string;
}

interface Major {
  date: Date|Moment;
  name?: string;
  link?: string;
  location?: Location[];
  locationName?: string;
}

interface OfficeHour {
  date: Date|Moment;
  name?: string;
  location?: Location[];
  locationName?: string;
}

interface Section {
  date: Date|Moment;
  name?: string;
  location?: Location[];
  locationName?: string;
}

class CalendarData {
  datesOfInstruction = {
    start: moment('Sun 2019-01-06', 'ddd YYYY-MM-DD'),  // Must be a Sunday
    end:   moment('Sat 2019-03-23', 'ddd YYYY-MM-DD')   // Must be a Saturday
  };

  locations = {
    lecture: [
      {
        time: '11:30 - 12:50',
        location: 'NAN 181'
      }
    ],

    section: [
      {
        time: '10:30 - 11:20',
        location: 'MGH 295'
      },
      {
        time: '11:30 - 12:20',
        location: 'MGH 058'
      },
      {
        time: '1:30 - 2:20',
        location: 'MGH 295'
      },
      {
        time: '2:30 - 3:20',
        location: 'MGH 295'
      }
    ],

    posterSession: [
      {
        time: '4:00 - 5:00',
        location: 'CSE Atrium'
      }
    ],

    officeHourJames: [
      {
        time: "3:30 - 4:30",
        location: "CSE 632"
      }
    ]
  };

  holidays = [
    {
      date: moment('2019-01-21', 'YYYY-MM-DD'),
      name: 'Martin Luther King Day'
    },
    {
      date: moment('2019-02-18', 'YYYY-MM-DD'),
      name: 'Presidents Day'
    }
  ];

  lectures: Lecture[] = [
    {
      date: moment('2019-01-08', 'YYYY-MM-DD'),
      name: 'Introduction,<br>Project Overview',
      // slides: 'slides/lecture/l01-intro.pdf',
      // panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5e7b3a08-dcc7-41b8-a61d-0dc83414fc79'
    },
    {
      date: moment('2019-01-10', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-15', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-17', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-22', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-24', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-29', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-31', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-05', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-07', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-12', 'YYYY-MM-DD'),
    },
    // {
    //   date: moment('2019-02-14', 'YYYY-MM-DD'),
    // },
    {
      date: moment('2019-02-19', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-21', 'YYYY-MM-DD'),
    },
    // {
    //   date: moment('2019-02-26', 'YYYY-MM-DD'),
    // },
    {
      date: moment('2019-02-28', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-03-05', 'YYYY-MM-DD'),
    },
    // {
    //   date: moment('2019-03-07', 'YYYY-MM-DD'),
    // },
    {
      date: moment('2019-03-12', 'YYYY-MM-DD'),
    },
    // {
    //   date: moment('2019-03-14', 'YYYY-MM-DD'),
    // }
    // {
    //   date: moment('2019-01-10', 'YYYY-MM-DD'),
    //   name: 'Design Diamond',
    //   // slides: 'slides/lecture/l02-designdiamond.pdf',
    //   // panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=92ff6fa2-fcb9-4a18-8c96-2fff79fc1819'
    //   // notes: 'Required for Project 2f'
    // },
    // {
    //   date: moment('2019-01-15', 'YYYY-MM-DD'),
    //   name: 'Contextual Inquiry,<br>Design Research',
    //   // slides: 'slides/lecture/l03-designresearch.pdf',
    //   // panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4a96a0fe-329e-425f-ad99-32f80af30b85'
    //   // notes: 'Required for Project 2b, Design Research Planning Over Weekend'
    // },
  // - date: '2017-10-10'
  //   location: 'lecturesdenny'
  //   name: 'Critique'
  //   slides: 'slides/lecture/l04-critique.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=287b2c2d-d3d7-4846-8070-ca695b76b4a4'
  // - date: '2017-10-12'
  //   name: 'Task Analysis'
  //   slides: 'slides/lecture/l05-taskanalysis.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2a5f61f1-c9c0-44c5-b765-7a5bb836b7ac'
  //   # notes: 'Required for Project 2d'
  // - date: '2017-10-17'
  //   name: 'Design of Everyday Things'
  //   slides: 'slides/lecture/l06-doet.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2b744838-59fc-44d0-aeab-31d89ba3a3a8'
  // - date: '2017-10-19'
  //   name: 'Storyboarding,<br>Video Prototyping'
  //   slides: 'slides/lecture/l07-storyboarding.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e89bb53c-9d11-422c-9642-e67ace2fc7a4'
  //   # notes: 'Required for Project 2g'
  // - date: '2017-10-26'
  //   name: 'Presentations,<br>Paper Prototyping,<br>Testing'
  //   slides: 'slides/lecture/l08-paperprototyping.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9d2db06b-a117-4d54-8817-bb1ddb79c116'
  //   # notes: 'Required for Project 3a'
  // - date: '2017-10-31'
  //   name: 'Testing,<br>Patterns'
  //   slides: 'slides/lecture/l09-testing-patterns.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=20b59274-0923-40a6-afaa-143c55f52747'
  // - date: '2017-11-07'
  //   location: 'lecturesdenny'
  //   name: 'Inspection'
  //   slides: 'slides/lecture/l11-inspection.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5a013100-67b2-46ce-9280-01063715084b'
  //   # notes: 'Required for Project 3b'
  // - date: '2017-11-09'
  //   name: 'Human Performance'
  //   slides: 'slides/lecture/l12-humanperformance.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f2be7adb-8aae-42fc-9204-a3da5df77e82'
  // - date: '2017-11-14'
  //   name: 'Interface Implementation'
  //   slides: 'slides/lecture/l13-interfaceimplementation.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=dca0f4a0-2c45-4656-a7b3-fddae52979d6'
  // - date: '2017-11-16'
  //   name: 'History'
  //   slides: 'slides/lecture/l14-history.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=75db126b-00c5-482b-8899-818a4da4391a'
  // - date: '2017-11-28'
  //   name: 'Designing for Diverse Needs'
  //   slides: 'slides/lecture/l15-designingfordiverseneeds.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33a018b1-c498-44cd-9edf-30e238a6656d'
  // - date: '2017-12-05'
  //   name: 'Video Critique'
  //   slides: 'slides/lecture/l17-videos.pdf'
  //   panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=13d54897-953d-4b90-a841-7e1e0c14145f'
  ];

  sections: Section[] = [
    {
      date: moment('2019-01-11', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-18', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-01-25', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-01', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-08', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-02-22', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-03-01', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-03-14', 'YYYY-MM-DD'),
    },
    {
      date: moment('2019-03-15', 'YYYY-MM-DD'),
    }
  ];

  majors: Major[] = [
    {
      date: moment('2019-02-14', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'lecture',
      link: '/assignments/assignment2#id-2i-presentation'
    },
    {
      date: moment('2019-02-15', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'section',
      link: '/assignments/assignment2#id-2i-presentation'
    },
    {
      date: moment('2019-02-26', 'YYYY-MM-DD'),
      name: 'Exam',
      locationName: 'lecture',
      // link: 'slides/lecture/cse440-consolidated-17au.pdf'
    },
    {
      date: moment('2019-03-07', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'lecture',
      link: '/assignments/assignment3#id-3g-presentation'
    },
    {
      date: moment('2019-03-08', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'section',
      link: '/assignments/assignment3#id-3g-presentation'
    },
    {
      date: moment('2019-03-20', 'YYYY-MM-DD'),
      name: 'Poster Session',
      locationName: 'posterSession',
      link: '/assignments/assignment4#id-4d-final-poster-final-video-final-website'
    }
  ];

  assignments = [
    // Assignment 0
    {
      date: moment('2019-01-10', 'YYYY-MM-DD'),
      name: "0 - Introduction Slide",
      dueNote: "[due end of day]",
      link: "/assignments/assignment0/"
    },

    // Assignment 1
    {
      date: moment('2019-01-10', 'YYYY-MM-DD'),
      dueNote: '[due night before section]',
      name: '1a - Project Brainstorm',
      link: '/assignments/assignment1#id-1a-proposal-brainstorm'
    },
    {
      date: moment('2019-01-14', 'YYYY-MM-DD'),
      name: '1b - Project Proposal',
      dueNote: '[due night before class]',
      link: '/assignments/assignment1#id-1b-project-proposal'
    },
    {
      date: moment('2019-01-16', 'YYYY-MM-DD'),
      name: '1c - Project Bid',
      dueNote: '[due night before class]',
      link: '/assignments/assignment1/#id-1c-project-bid'
    },

    // Assignment 2
    {
      date: moment('2019-01-18', 'YYYY-MM-DD'),
      name: '2a - Project Ideation',
      dueNote: '[done in section]',
      link: '/assignments/assignment2#id-2a-project-ideation'
    },
    {
      date: moment('2019-01-21', 'YYYY-MM-DD'),
      name: '2b - Design Research Plan',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2b-design-research-plan'
    },
    {
      date: moment('2019-01-24', 'YYYY-MM-DD'),
      name: '2c - Design Research Check-In',
      dueNote: '[due night before section]',
      link: '/assignments/assignment2#id-2c-design-research-check-in'
    },
    {
      date: moment('2019-01-28', 'YYYY-MM-DD'),
      name: '2d - Design Research Review',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2d-design-research-review'
    },
    {
      date: moment('2019-01-31', 'YYYY-MM-DD'),
      name: '2e - Task Review',
      dueNote: '[due night before section]',
      link: '/assignments/assignment2#id-2e-task-review'
    },
    {
      date: moment('2019-02-04', 'YYYY-MM-DD'),
      name: '2f - Design Check-In',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2f-design-check-in-3x4',
    },
    {
      date: moment('2019-02-07', 'YYYY-MM-DD'),
      name: '2g - Design Review',
      dueNote: '[due night before section]',
      link: '/assignments/assignment2#id-2d-design-research-review'
    },
    {
      date: moment('2019-02-11', 'YYYY-MM-DD'),
      name: '2h - Getting the Right Design',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2h-final-report'
    },
    {
      date: moment('2019-02-13', 'YYYY-MM-DD'),
      name: '2i - Presentation',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2i-presentation'
    },
    {
      date: moment('2019-02-15', 'YYYY-MM-DD'),
      name: '2j - Team Peer Feedback',
      dueNote: '[due end of day]',
      link: '/assignments/assignment2#id-2j-team-peer-feedback'
    },

    // Assignment 3
    {
      date: moment('2019-02-18', 'YYYY-MM-DD'),
      name: '3a - Paper Protoype',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3a-paper_prototype'
    },
    {
      date: moment('2019-02-20', 'YYYY-MM-DD'),
      name: '3b - Heuristic Evaluation',
      dueNote: '[due end of day]',
      link: '/assignments/assignment3#id-3b-heuristic-evaluation'
    },
    {
      date: moment('2019-02-21', 'YYYY-MM-DD'),
      name: '3c - Usability Testing Check-In',
      dueNote: '[due end of day]',
      link: '/assignments/assignment3#id-3c-usability-testing-check-in'
    },
    {
      date: moment('2019-02-28', 'YYYY-MM-DD'),
      name: '3d - Usability Testing Review',
      dueNote: '[due night before section]',
      link: '/assignments/assignment3#id-3d-usability-testing-review'
    },
    {
      date: moment('2019-03-04', 'YYYY-MM-DD'),
      name: '3e - Digital Mockup',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3e-digital-mockup'
    },
    {
      date: moment('2019-03-05', 'YYYY-MM-DD'),
      name: '3f - Getting the Design Right',
      dueNote: '[due end of day]',
      link: '/assignments/assignment3#id-3f-final_report'
    },
    {
      date: moment('2019-03-06', 'YYYY-MM-DD'),
      name: '3g - Presentation',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3g-presentation'
    },

    // Assignment 4
    {
      date: moment('2019-03-11', 'YYYY-MM-DD'),
      name: '4a - Initial Website',
      dueNote: '[due night before class]',
      link: '/assignments/assignment4#id-4a-initial-website'
    },
    {
      date: moment('2019-03-11', 'YYYY-MM-DD'),
      name: '4b - Initial Video Prototype',
      dueNote: '[due night before class]',
      link: '/assignments/assignment4#id-4b-initial-video-prototype'
    },
    {
      date: moment('2019-03-13', 'YYYY-MM-DD'),
      name: '4c - Initial Poster and Pitch',
      dueNote: '[due night before class]',
      link: '/assignments/assignment4#id-4c-poster-critique-and-pitch'
    },
    {
      date: moment('2019-03-15', 'YYYY-MM-DD'),
      name: '4d - Final Poster, Video, Website',
      dueNote: '[due end of day]',
      link: '/assignments/assignment4#id-4d-final-poster-final-video-final-website'
    },
    {
      date: moment('2019-03-18', 'YYYY-MM-DD'),
      name: '4e - Team Peer Feedback',
      dueNote: '[due end of day]',
      link: '/assignments/assignment4#id-4e-team-peer-feedback'
    }
  ];

  officeHours: OfficeHour[] = [
    {
      date: moment('2019-01-15', 'YYYY-MM-DD'),
      name: 'Office Hours - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2019-01-22', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2019-01-29', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2019-02-05', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2019-02-12', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2019-02-19', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2019-03-05', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    }
  ];

  aways = [
    {
      date: moment('2019-01-08', 'YYYY-MM-DD'),
      name: 'Manaswi Away',
    },
    {
      date: moment('2019-01-10', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-01-17', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-01-24', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-01-31', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-07', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-14', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-21', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-28', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-03-07', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-03-14', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-03-18', 'YYYY-MM-DD'),
      name: 'James Away @ <a href="https://iui.acm.org/2019/">IUI 2019</a>',
    },
    {
      date: moment('2019-03-19', 'YYYY-MM-DD'),
      name: 'James Away @ <a href="https://iui.acm.org/2019/">IUI 2019</a>',
    }
  ];
}

export const calendar = new CalendarData();
