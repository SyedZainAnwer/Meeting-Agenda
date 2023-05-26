import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

interface sideList {
  title: string;
  path: string;
  id: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  leftSideItems: sideList[] = [
    {
      title: 'My Profile',
      path: '/',
      id: 4353,
    },
    {
      title: 'Scheduled Meeting',
      path: '/',
      id: 4353,
    },
    {
      title: 'Schedule a Meeting',
      path: '/schedule-a-meeting',
      id: 4234,
    },
  ]
  constructor(private router: Router){ }

  navigateToAbout() {
    this.router.navigate(['/meeting-attended']);
  }
}
