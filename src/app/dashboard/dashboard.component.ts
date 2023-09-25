import { Component , OnInit} from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activities: Activity [] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getAllActivities()
      .subscribe(activities => this.activities = activities.slice(0,5));
  }
}



