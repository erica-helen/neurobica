import {Component, OnInit} from '@angular/core';
import { Activity } from "../activity";
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-activity-detail', 
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.css']
  })
export class ActivityDetailComponent implements OnInit {
  activity: Activity | undefined;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity (): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.activityService.getActivity(id)
      .subscribe((activity: Activity | undefined) => this.activity = activity);
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

  updateChecklist(checkItemId: Number): void {
    const checkedItem = this.activity?.checklist?.find(item => item.id === checkItemId);
    if(checkedItem && this.activity){
      checkedItem.enabled = false;
      this.activityService.updateActivity(this.activity).subscribe();
    }
  }
}
