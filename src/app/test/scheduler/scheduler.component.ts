import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchedulerUtils } from './schedulerUtils';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  schedulerUtils: SchedulerUtils = new SchedulerUtils();

  constructor() {
    var td = new Date();
    var dd = td.getDate();
    var mm = td.getMonth() + 1;
    this.today = td.getFullYear().toString() + "-";

    if (mm < 10) {
      this.today += '0';
    }
    this.today += mm.toString() + "-";

    if (dd < 10) {
      this.today += '0';
    }
    this.today += dd.toString();
  }

  events: any[] = [];
  idInc: number = 1;
  today = "";

  header: any;
  views: any;
  options: any;
  hiddenDays = [0, 6]; // hide sunday and saturday
  businessHours = [ // specify an array instead
    {
      dow: [1, 2, 3, 4, 5], // Monday, Tuesday, Wednesday
      start: '09:00', // 8am
      end: '13:00' // 6pm
    },
    {
      dow: [1, 2, 3, 4, 5], // Monday, Tuesday, Wednesday
      start: '14:00', // 8am
      end: '18:00' // 6pm
    }/*,
    {
      dow: [4, 5], // Thursday, Friday
      start: '10:00', // 10am
      end: '16:00' // 4pm
    }*/
  ];
  minTime = "07:00:00";
  maxTime = "20:00:00";
  weekends = false;

  ngOnInit() {
    this.header = {
      left: 'prev,next',
      center: 'title, today',
      // right: 'month,agendaWeek,agendaDay'
     // right: 'agendaDay,agendaFourDay,tenDay'
     right: 'agendaDay,agendaFourDay,tenDay'
    };

    this.views = {
      agendaFourDay: {
        type: 'agenda',
        //duration: { days: 4 },
        dayCount: 4,
        buttonText: '4 day',
        slotEventOverlap: false,
      },
      tenDay: {
        type: 'agenda',
        duration: { days: 10 },
       // dayCount: 10,
        buttonText: '10 day',
        slotEventOverlap: false,
      }
    }

    this.options = {
      views: this.views,
      defaultView: 'agendaFourDay',
      eventColor: '#85144b',
      weekends: false,
     /* visibleRange: {
        start: '2018-07-22',
        end: '2018-08-25'
      }*/
    }
  }

  newEvent(event) {
    var formatted = event.date.format("YYYY-MM-DD");
    var formattedHours = event.date.format("HH");
    var formattedMinutes = event.date.format("mm");
    var formattedTime = formattedHours + ":" + formattedMinutes;

    var endDate = "";
    var startDate = "";
    if (formattedTime != "" && formattedTime != "00:00") {
      startDate = formatted + "T" + formattedTime;
      endDate = this.schedulerUtils.generateEventEndDate(startDate);
    }
    else {
      startDate = formatted + "T" + "08:00";
      endDate = formatted + "T" + "18:00";
    }

    /*console.log(startDate)
    console.log(endDate);*/

    console.log("/******  NEW EVENT REQUEST *******/")
    console.log(this.events);

    if (!this.schedulerUtils.isSlotAvailable(startDate, endDate, this.events)) {
      console.log("Cant create the event")
      return;
    }

    this.idInc += 1;
    this.events.push({
      id: this.idInc++,
      title: "Click To Assign A Job" + this.idInc.toString(),
      // start: "2017-02-09",
      start: startDate,
      end: endDate,
      overlap: false,
      task: "myTask"
    });

  }

  clickedEvent = { id: -1, };
  display: boolean = false;
  onEventClick(event) {
    console.log(event)
    this.clickedEvent.id = event.calEvent.id;
    this.display = true;
  }

  removeSelectedEvent() {
    this.display = false;
    this.removeEvent(this.clickedEvent.id);
    this.clickedEvent = { id: -1 };
  }

  removeEvent(id) {
    this.events = this.events.filter(function (element) {
      console.log("Removing " + element.id + " --- " + id)
      if (element.id != id)
        return true;
      return false;
    });
  }

  addTaskToEvent() {
    this.display = false;

    var tempElement;
    this.events = this.events.filter((element) => {
      console.log("Confirming " + element.id + " --- " + this.clickedEvent.id)
      this.idInc += 1;
      if (element.id == this.clickedEvent.id) {
        element.color = '#2ECC40';
        element.id = this.idInc;
        tempElement = element;
      }
      else {
        return element;
      }
    });

    setTimeout(() => { this.events.push(tempElement); }, 25);
    console.log(this.events)
    this.clickedEvent = { id: -1 };
  }




  onEventDrop(event) {
    //console.log("/*** START DROP EVENT ****/")
    // console.log(event)
    // console.log(event.event.start.format("HH:mm"))
    // console.log("/*** END DROP EVENT ****/")

    // var dateTime = event.event.start.format("HH:mm");
  }

  onDrop(event) {
    console.log("/*** ENTER DROP EVENT ****/")
  }

  dragStart(event) {
    console.log("Drag Strart")
  }

  test(event){
    console.log("TEST")
    console.log(event)
  }

}
