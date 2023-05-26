import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListsComponent } from './meeting-lists.component';

describe('MeetingListsComponent', () => {
  let component: MeetingListsComponent;
  let fixture: ComponentFixture<MeetingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
