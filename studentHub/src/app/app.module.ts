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
import { ManageListingsComponent } from './features/owner/manage-listings/manage-listings.component';
import { MenuComponent } from './features/owner/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './features/student/search/search.component';
import { ListingDetailsComponent } from './features/student/listing-details/listing-details.component';
import { FavouritesComponent } from './features/student/favourites/favourites.component';
import { StatsCardComponent } from './shared/component/stats-card/stats-card.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { RegisterComponent } from './features/auth/register/register.component';

@NgModule({
  declarations: [
    FavouritesComponent,
    ListingDetailsComponent,
    SearchComponent,
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
    AddListingsComponent,
    ManageListingsComponent,
    MenuComponent,
    StatsCardComponent,
    LoginComponent,
    LoaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true
},
    {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
