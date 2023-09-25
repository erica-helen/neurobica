import { Component , OnInit} from '@angular/core';
import { Activity1 } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  activities: Activity1 [] = [];

  constructor(private ActivityService: ActivityService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.ActivityService.getActivity()
    .subscribe(activities => this.activities = activities.slice(0,5));
  }
}



