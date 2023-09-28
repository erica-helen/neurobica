import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ACTIVITY, Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities = ACTIVITY
    return {activities};
  }


  genId( activities: Activity []): number {
    return activities.length > 0 ? Math.max(...activities.map(activity => activity.id)) + 1 : 11;
  }
}
 