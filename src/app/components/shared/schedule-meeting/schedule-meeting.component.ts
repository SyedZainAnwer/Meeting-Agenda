import { Component, EventEmitter, Output } from '@angular/core';

interface employeeName{
  name: string;
  id: number;
}
@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})

export class ScheduleMeetingComponent {

  @Output() formInputs = new EventEmitter<string>();

  employees:employeeName[] = [
    {
      name: 'User1',
      id: 1,
    },
    {
      name: 'User2',
      id: 2,
    },
    {
      name: 'User3',
      id: 3,
    },
    {
      name: 'User4',
      id: 4,
    },
    {
      name: 'User5',
      id: 5,
    },
  ]

  email!: string;
  meetingWith!: string;
  lookingFor!: string;
  location!: string;
  person!: string;
  callType!: string;
  selectedDate!: string;
  Linkedln!: string;

  showValue() {
    this.formInputs.emit(this.email)
    this.formInputs.emit(this.meetingWith)
    this.formInputs.emit(this.lookingFor)
    this.formInputs.emit(this.location)
    this.formInputs.emit(this.person)
    this.formInputs.emit(this.callType)
    this.formInputs.emit(this.selectedDate)
    this.formInputs.emit(this.Linkedln)
    console.log(this.email, this.meetingWith, this.lookingFor, this.location, this.person, this.callType, this.selectedDate);
  }
}
