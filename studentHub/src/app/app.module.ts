import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ListingCardComponent } from './shared/component/listing-card/listing-card.component';
import { HomeComponent } from './features/public/home/home.component';
import { ListingsComponent } from './features/public/listings/listings.component';
import { ListingsDetailComponent } from './features/public/listings-detail/listings-detail.component';
import { StudentDashboardComponent  } from './features/student/dashboard/dashboard.component';
import { AddListingsComponent } from './features/owner/add-listings/add-listings.component';
import { OwnerDashboardComponent } from './features/owner/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    StudentLayoutComponent,
    OwnerLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ListingCardComponent,
    HomeComponent,
    ListingsComponent,
    ListingsDetailComponent,
    StudentDashboardComponent ,
    OwnerDashboardComponent,
    AddListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
