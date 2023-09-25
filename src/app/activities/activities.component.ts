import { Component, OnInit  } from '@angular/core';
import {Activity1 } from '../activity';

import { ActivityService } from '../activity.service';
import { ACTIVITY } from '../mock-acitivies';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent {

  selectedActivity1?: Activity1;

  activities: Activity1 [] = [];

  constructor(private ActivityService:ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  
  getActivities(): void {
    this.ActivityService.getActivity()
    .subscribe(activities => this.activities = activities);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.ActivityService.addActivity({ name } as Activity1)
      .subscribe(ACTIVITY => {
        this.activities.push(ACTIVITY);
      });
  }

  delete(activity: Activity1): void {
    this.activities = this.activities.filter(a => a !== activity);
    this.ActivityService.deleteActivity(activity.id).subscribe();
  }

}