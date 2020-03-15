import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AllapiService } from '../../services/allapi.service';
 
// import timeGrigPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

declare var $: any;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})

export class CalenderComponent implements OnInit {

  calendarPlugins:any;
  date:any;
  comment : any;
  time : any;
  event : any;

  constructor( private allApi: AllapiService) { }

  ngOnInit(){
    this.calendarPlugins = [dayGridPlugin]; // important!
  }

  
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;

  //@ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
 
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
  addEventNew = () => {
    console.log("clicked add new event");
  }

  add = () => {
    console.log("clicked add button");
    
    let formData: any = {};
    formData.date = this.date;
    formData.time = this.time;
    formData.event = this.event;
    formData.comment = this.comment;
   
    console.log("fData", formData);

    this.allApi.addEvent(formData).subscribe(
      (result) => {
        console.log("add the event",result)
      }, (err) => {
        console.log("event not added",err);
      }
    )
  }

}