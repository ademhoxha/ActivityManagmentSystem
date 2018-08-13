import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SchedulerUtils, ISchedulerBuilder} from '@app/activity-modules/activity-shared/schedulerUtils';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent  implements OnInit {

   @Input() schedulerBuilder: ISchedulerBuilder;
   @Output() eventChanges = new EventEmitter<any>();
 
   schedulerUtils: SchedulerUtils = new SchedulerUtils();
 
   // configuration parameters
   enabledEventModification: boolean;
   defaultDay = ""; // defaultDay
   header; // header bottons
   options; // other options
   businessHours; // business hours
   minTime = ""; // max time
   maxTime = ""; // min time
 
   // event parameters
   events: any[] = [];
   idInc: number = 1;
   clickedEvent = { id: -1, };
 
   constructor() {
   }
 
   ngOnInit() {
    var builder = this.schedulerBuilder.initializeSCheduler();
    this.header = builder.header;
    this.options = builder.options;
    this.defaultDay = builder.defaultDay;
    this.minTime = builder.minTime;
    this.maxTime = builder.maxTime;
    this.enabledEventModification = builder.enabledEventModification;
    this.businessHours = builder.businessHours;
   }
 
   newEvent(event) {
     if (!this.enabledEventModification)
       return;
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
 
     if (!this.schedulerUtils.isSlotAvailable(startDate, endDate, this.events)) {
       console.log("Cant create the event")
       return;
     }
 
     this.idInc += 1;
     this.events.push({
       id: this.idInc++,
       title: "Click To Assign A Job" + this.idInc.toString(),
       start: startDate,
       end: endDate,
       overlap: false,
       task: "myTask"
     });
 
   }
 
   display: Boolean = false;
   onEventClick(event) {
     if (!this.enabledEventModification)
       return;
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
 
   addJobToEvent(ret) {
     var job = ret.selecteJob;
     this.display = false;
 
     var tempElement;
     this.events = this.events.filter((element) => {
       console.log("Confirming " + element.id + " --- " + this.clickedEvent.id)
       this.idInc += 1;
       if (element.id == this.clickedEvent.id) {
         element.color = '#2ECC40';
         element.id = this.idInc;
         element.title = job;
         tempElement = element;
       }
       else {
         return element;
       }
     });
 
     setTimeout(() => { this.events.push(tempElement); }, 25);
     this.clickedEvent = { id: -1 };
   }

   onHide(evt){
    this.display = false;
   }
 
 
 }
 