import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity1 } from './activity';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities = [
      { id: 12, name: 'Activity 1' },
      { id: 13, name: 'Activity 2' },
      { id: 14, name: 'Activity 3' },
      { id: 15, name: 'Activity 4' },
      { id: 16, name: 'Activity 5' },
      { id: 17, name: 'Activity 6' },
      { id: 18, name: 'Activity 7' },
      { id: 19, name: 'Activity 8' },
      { id: 20, name: 'Activity 9' }
    ];  
    console.log(activities)
    return {activities};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId( activities: Activity1 []): number {
    return activities.length > 0 ? Math.max(...activities.map(activity => activity.id)) + 1 : 11;
  }
}