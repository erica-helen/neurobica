import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { ACTIVITY } from '../mock-acitivies';
import { ActivityService } from '../activity.service';
import { Activity1 } from '../activity';

@Component({
    selector: 'app-activity-search',
    templateUrl: './activity-search.component.html',
    styleUrls: ['./activity-search.component.css'] 
  })

export class ActivitySearchComponent implements OnInit {
  activities$!: Observable<Activity1[]>;
  private searchTerms = new Subject<string>();

  constructor(private ActivityService: ActivityService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.activities$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.ActivityService.searchActivity(term)),
    );
  }
}