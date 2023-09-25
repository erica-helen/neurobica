import { Component, Input } from '@angular/core';
import { Activity1 } from "../activity";
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.css']
  })
  export class ActivityDetailComponent {

    activity: Activity1 | undefined;

    constructor(
      private route: ActivatedRoute,
      private activityService: ActivityService,
      private location: Location
    ) {}
  
  
    
  ngOnInit(): void {
    this.getActivities();
  }

  
  getActivities (): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.activityService.getActivities(id)
    .subscribe((activity: Activity1 | undefined) => this.activity = activity);
  }


  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    if (this.activity) {
      this.activityService.updateActivity(this.activity)
        .subscribe(() => this.goBack());
    }
  }

}
  
  