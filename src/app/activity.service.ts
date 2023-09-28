import { Injectable } from '@angular/core';
import {Activity } from './activity';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  private apiUrl = 'api/activities';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private messageService: MessageService) {}

  getActivity(id: number): Observable<Activity> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Activity>(url).pipe(
      tap(_ => this.log(`fetched activity id=${id}`)),
      catchError(this.handleError<Activity>(`getActivities id=${id}`))
    );
  }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl)
      .pipe(
        map((activities: Activity[]) => {
          this.log('fetched activities')
          const mappedActivities: Activity[] = this.mapEnableActivities(activities);
          return mappedActivities
        }),
        catchError(this.handleError<Activity[]>('getActivity', []))
      );
  }

  updateActivity(ACTIVITY: Activity): Observable<any> {
    return this.http.put(this.apiUrl, ACTIVITY, this.httpOptions).pipe(
      tap(_ => this.log(`updated activity id=${ACTIVITY.id}`)),
      catchError(this.handleError<any>('updateActivity'))
    );
  }

  addActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.apiUrl, activity, this.httpOptions).pipe(
      tap((newActivity: Activity) => this.log(`added activity w/ id=${newActivity.id}`)),
      catchError(this.handleError<Activity>('addActivity'))
    );
  }

  deleteActivity(id: number): Observable<Activity> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Activity>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted activity id=${id}`)),
      catchError(this.handleError<Activity>('deleteActivity'))
    );
  }

  searchActivity(term: string): Observable<Activity[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Activity[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found activity matching "${term}"`) :
        this.log(`no activity matching "${term}"`)),
      catchError(this.handleError<Activity[]>('searchActivity', []))
    );
  }


  private log(message: string) {
    this.messageService.add(`ActivityService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  mapEnableActivities(activities: Activity[]):Activity[] {
    const checklist: Boolean[] = [];
    
    const mappedActivities:Activity[] = activities.map((activity, indexOf) => {
      const mappedActivity: Activity = {
        ...activity,
        enabled: !checklist.some(check => check)
      };

      checklist.push(activity.checklist[0].enabled)
      return mappedActivity
    })

    return mappedActivities;
  }
}


