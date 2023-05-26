import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScheduleMeetingComponent } from './components/shared/schedule-meeting/schedule-meeting.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { ScheduledMeetingComponent } from './pages/scheduled-meeting/scheduled-meeting.component';
import { MeetingListsComponent } from './components/meeting-lists/meeting-lists.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MeetingDetailsComponent } from './components/meeting-details/meeting-details.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FeedbackComponent } from './components/shared/feedback/feedback.component';
import {NgIf, NgFor} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    ScheduleMeetingComponent,
    SidebarComponent,
    HomeComponent,
    ScheduledMeetingComponent,
    MeetingListsComponent,
    LoginComponent,
    LoginPageComponent,
    SignupComponent,
    LayoutComponent,
    MeetingDetailsComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
