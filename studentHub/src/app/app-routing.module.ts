import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/public/home/home.component';
import { OwnerDashboardComponent } from './features/owner/dashboard/dashboard.component';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { ListingsComponent } from './features/public/listings/listings.component';
import { StudentDashboardComponent } from './features/student/dashboard/dashboard.component';
import { AddListingsComponent } from './features/owner/add-listings/add-listings.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'listings', component: ListingsComponent }
    ]
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [
      { path: 'dashboard', component: StudentDashboardComponent }
    ]
  },
  {
    path: 'owner',
    component: OwnerLayoutComponent,
    children: [
      { path: 'dashboard', component: OwnerDashboardComponent },
      { path: 'add-listing', component: AddListingsComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
