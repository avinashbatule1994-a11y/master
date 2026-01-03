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
import { FavouritesComponent } from './features/student/favourites/favourites.component';
import { SearchComponent } from './features/student/search/search.component';
import { ListingDetailsComponent } from './features/student/listing-details/listing-details.component';
import { ManageListingsComponent } from './features/owner/manage-listings/manage-listings.component';
import { MenuComponent } from './features/owner/menu/menu.component';
import { RoleGuard } from './core/guards/role.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [

  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: "login",
        component: LoginComponent,
        // canActivate: [RoleGuard]
      },
      {path:"register",component:RegisterComponent},
      { path: 'home', component: HomeComponent },
      { path: 'listings', component: ListingsComponent }
    ]
  },
  {
  path: 'student',
  component: StudentLayoutComponent,
  canActivate: [RoleGuard],
  data: { role: 'student' },
  children: [
    { path: 'dashboard', component: StudentDashboardComponent }
  ]
},
{
  path: 'owner',
  component: OwnerLayoutComponent,
  canActivate: [RoleGuard],
  data: { role: 'owner' },
  children: [
    { path: 'dashboard', component: OwnerDashboardComponent }
  ]
}

  // {
  //   path: 'student',
  //   component: StudentLayoutComponent,
  //   canActivate: [RoleGuard],
  //   data: { role: 'student' },
  //   children: [
  //     { path: 'dashboard', component: StudentDashboardComponent },
  //     { path: 'favourites', component: FavouritesComponent },
  //     { path: 'search', component: SearchComponent },
  //     { path: "details/:id", component: ListingDetailsComponent }
  //   ]
  // },
  // {
  //   path: 'owner',
  //   component: OwnerLayoutComponent,
  //   canActivate: [RoleGuard],
  //   data: { role: 'owner' },
  //   children: [
  //     { path: 'dashboard', component: OwnerDashboardComponent },
  //     { path: 'add-listing', component: AddListingsComponent },
  //     { path: 'edit-listing/:id', component: AddListingsComponent },
  //     { path: 'manage-listings', component: ManageListingsComponent },
  //     { path: 'menu', component: MenuComponent },
  //   ]
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
