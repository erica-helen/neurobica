import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ActivitySearchComponent } from './activity-search/activity-search.component';
import {PageNotFoundComponent} from "./error-page/page-not-found.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],

  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ActivitySearchComponent,
    PageNotFoundComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
