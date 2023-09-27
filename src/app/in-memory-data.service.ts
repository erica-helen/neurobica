import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities = [
      { id: 1, name: 'Activity 1', description: 'Dress with your eyes closed' },
      { id: 2, name: 'Activity 2', description: 'Eat different types of food' },
      { id: 3, name: 'Activity 3', description: 'Check the time in a mirror' },
      { id: 4, name: 'Activity 4', description: 'Switch the computer mouse aside '},
      { id: 5, name: 'Activity 5', description: 'Brush your teeth using your left hand (or your right, if you are left-handed)' },
      { id: 6, name: 'Activity 6', description: 'When reading a word, think of five others that start with the same letter'},
      { id: 7, name: 'Activity 7', description: 'If you are right-handed, try writing with your left hand'},
      { id: 8, name: 'Activity 8', description: 'Learn a new language' },
      { id: 9, name: 'Activity 9' }
    ];
    return {activities};
  }


  genId( activities: Activity []): number {
    return activities.length > 0 ? Math.max(...activities.map(activity => activity.id)) + 1 : 11;
  }
}
