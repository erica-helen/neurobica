import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import {PageNotFoundComponent} from "./error-page/page-not-found.component";

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ActivityDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
