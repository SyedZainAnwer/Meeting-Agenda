import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MeetingDetailsComponent } from './components/meeting-details/meeting-details.component';
import { MeetingListsComponent } from './components/meeting-lists/meeting-lists.component';
import { FeedbackComponent } from './components/shared/feedback/feedback.component';
import { ScheduleMeetingComponent } from './components/shared/schedule-meeting/schedule-meeting.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes =  [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'schedule-a-meeting',
    component:ScheduleMeetingComponent
  },
  {
    path: 'meetings/:id',
    component: MeetingDetailsComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
