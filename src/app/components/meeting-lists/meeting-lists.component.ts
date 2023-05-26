import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-lists',
  templateUrl: './meeting-lists.component.html',
  styleUrls: ['./meeting-lists.component.css'],
})
export class MeetingListsComponent {
  searchText!: string;

  constructor(private routes: Router) {}
  dataSources = [
    {
      position: 1,
      name: 'John Doe',
      time: '10:00 AM',
      date: '2023-03-15',
      meetingWith: 'ABC Company',
    },
    {
      position: 2,
      name: 'Jane Smith',
      time: '2:30 PM',
      date: '2023-03-16',
      meetingWith: 'XYZ Corporation',
    },
  ];

  displayedColumns: string[] = [
    'position',
    'name',
    'time',
    'date',
    'meetingWith',
    'call type',
    'status',
  ];

  onRowClick(element: (typeof this.dataSources)[0]) {
    this.routes.navigate(['meetings', element.position]);
  }

  searches = new FormControl('');
  nameControl: FormControl = new FormControl();

  searchList: string[] = ['Name', 'Date', 'Meeting With', 'Location', 'Meeting Purpose'];
}


