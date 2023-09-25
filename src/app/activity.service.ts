import { Injectable } from '@angular/core';
import { Activity1  } from './activity';
import { ACTIVITY} from './mock-acitivies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  private ActivityUrl = 'api/activities';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


  // getActivity():Observable<Activity1[]> {
  //   const activities = of(ACTIVITY);
  //   this.messageService.add('ActivityService: fetched activity');
  //   return activities;
  // } 


  // getActivities(id: number): Observable<Activity1 | undefined> {
  //   const activities: Activity1 | undefined = ACTIVITY.find(a => a.id === id);
  //   this.messageService.add('ActivityService: fetched activity id=${id}');
  //   return of (activities)
  // }

  getActivities(id: number): Observable<Activity1> {
    const url = `${this.ActivityUrl}/${id}`;
    return this.http.get<Activity1>(url).pipe(
      tap(_ => this.log(`fetched activity id=${id}`)),
      catchError(this.handleError<Activity1>(`getActivities id=${id}`))
    );
  }


  getActivity(): Observable<Activity1[]> {
    return this.http.get<Activity1[]>(this.ActivityUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Activity1[]>('getActivity', []))
      );
  }

 getActivityNo404<Data>(id: number): Observable<Activity1> {
    const url = `${this.ActivityUrl}/?id=${id}`;
    return this.http.get<Activity1[]>(url)
      .pipe(
        map(activities => activities[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} activity id=${id}`);
        }),
        catchError(this.handleError<Activity1>(`getActivity id=${id}`))
      );
  }

  private log(message: string) {
    this.messageService.add('ActivityService: ${message}');
  }

  updateActivity(ACTIVITY: Activity1): Observable<any> {
    return this.http.put(this.ActivityUrl, ACTIVITY, this.httpOptions).pipe(
      tap(_ => this.log(`updated activity id=${ACTIVITY.id}`)),
      catchError(this.handleError<any>('updateActivity'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
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
addActivity(activity: Activity1): Observable<Activity1> {
  return this.http.post<Activity1>(this.ActivityUrl, activity, this.httpOptions).pipe(
    tap((newActivity: Activity1) => this.log(`added activity w/ id=${newActivity.id}`)),
    catchError(this.handleError<Activity1>('addActivity'))
  );
}

/** DELETE: delete the hero from the server */
deleteActivity(id: number): Observable<Activity1> {
  const url = `${this.ActivityUrl}/${id}`;

  return this.http.delete<Activity1>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted activity id=${id}`)),
    catchError(this.handleError<Activity1>('deleteActivity'))
  );
}

/* GET heroes whose name contains search term */
searchActivity(term: string): Observable<Activity1[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Activity1[]>(`${this.ActivityUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found activity matching "${term}"`) :
       this.log(`no activity matching "${term}"`)),
    catchError(this.handleError<Activity1[]>('searchActivity', []))
  );
}

}

  
