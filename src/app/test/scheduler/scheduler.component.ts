import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }
  events: any[] = [];
  idInc: number = 1;

  header: any;
  views: any;
  options : any;
  hiddenDays = [0,6]; // hide sunday and saturday
  businessHours = [ // specify an array instead
    {
      dow: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
      start: '08:00', // 8am
      end: '18:00' // 6pm
    },
    {
      dow: [ 4, 5 ], // Thursday, Friday
      start: '10:00', // 10am
      end: '16:00' // 4pm
    }
  ];
  minTime = "08:00:00";
  maxTime = "18:00:00";
  weekends = false;

  ngOnInit() {
    this.header = {
      left: 'prev,next today',
      center: 'title, agendaFourDay',
     // right: 'month,agendaWeek,agendaDay'
     right: 'agendaFourDay,tenDay'
    };

    this.views = {
      agendaFourDay: {
        type: 'agenda',
        duration: { days: 4 },
        buttonText: '4 day'
      },
      tenDay: {
        type: 'agenda',
        duration: { days: 10 },
        buttonText: '10 day'
      }
    }

    this.options = {
      views : this.views,
      defaultView: 'agendaFourDay'
    }

    this.events.push({
      id: this.idInc++,
      title: "event one",
      start: "2017-02-07",
      allDaySlot: false
    });
    this.events.push({
      id: this.idInc++,
      title: "All Day Event",
      start: "2017-02-03",
      allDaySlot: false
    })

    /*  this.events.push([{
        id: 1,
        title: "All Day Event",
        start: "3/02/2017",
        allDay: true
      },
      {
        id: 2,
        title: "Long Event",
        start: "5/02/2017",
        end: "5/02/2017"
      },
      {
        id: 3,
        title: "Repeating Event",
        start: "10/02/2017T16:00:00"
      },
      {
        id: 4,
        title: "Repeating Event",
        start: "12/02/2017T16:00:00"
      },
      {
        id: 5,
        title: "Conference",
        start: "15/02/2017",
        end: "15/02/20173"
      }]);*/
  }

  newEvent(event) {
    /**  console.log("Click")
      console.log(event.date.format("YYYY-MM-DD"))
      var date : Date = event.date.toDate();
      var formatted = event.date.format("YYYY-MM-DD");
      this.events.push({
        id: 1,
        title: "Click Event",
        start: formatted,
        end: formatted,
        allDaySlot: false
      });*/
    console.log(this.idInc)
    this.events.push({
      id: this.idInc++,
      title: "Click Event" + this.idInc.toString(),
      start: "2017-02-09",
      allDaySlot: false
    });
  }

}
