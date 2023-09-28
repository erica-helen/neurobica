import { Component } from '@angular/core';
import { generateActivitiesDatabase } from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Neurobics activities';
  constructor() {
    generateActivitiesDatabase();
  }
}


