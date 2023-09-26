import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities = [
      { id: 12, name: 'Activity 1', description: 'Dress with your eyes closed' },
      { id: 13, name: 'Activity 2', description: 'Eat different types of food' },
      { id: 14, name: 'Activity 3', description: 'Check the time in a mirror' },
      { id: 15, name: 'Activity 4', description: 'Switch the computer mouse aside '},
      { id: 16, name: 'Activity 5', description: 'Brush your teeth using your left hand (or your right, if you are left-handed)' },
      { id: 17, name: 'Activity 6' },
      { id: 18, name: 'Activity 7' },
      { id: 19, name: 'Activity 8' },
      { id: 20, name: 'Activity 9' }
    ];
    return {activities};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId( activities: Activity []): number {
    return activities.length > 0 ? Math.max(...activities.map(activity => activity.id)) + 1 : 11;
  }
}
