import { Component, OnInit  } from '@angular/core';
import {Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  selectedActivity?: Activity;
  activities: Activity[] = [];

  constructor(private activityService:ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getAllActivities()
    .subscribe(activities => this.activities = activities);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.activityService.addActivity({ name } as Activity)
      .subscribe(activity => {
        this.activities.push(activity);
      });
  }

  delete(activity: Activity): void {
    this.activities = this.activities.filter(a => a !== activity);
    this.activityService.deleteActivity(activity.id).subscribe();
  }

}
