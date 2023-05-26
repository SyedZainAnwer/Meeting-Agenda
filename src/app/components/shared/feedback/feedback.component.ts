import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  callStatus!: string;
  remoteWork!: string;
  relocation!: string;
  typeOfWork!: string;
  project!: string;
  hourlyRate!: string;
  interviewRequired!: string;
  dealClosed!: string;
  samePerson!: string;
  clearence!: string;
  nextStep!: string;
  client!: string;
  interview!: string;


  dataSources = [
    { position: 1, name: 'John Doe', time: '10:00 AM', date: '2023-03-15', meetingWith: 'ABC Company' },
    { position: 2, name: 'Jane Smith', time: '2:30 PM', date: '2023-03-16', meetingWith: 'XYZ Corporation' },
  ];

  displayedColumns: string[] = ['name', 'time', ];
}
