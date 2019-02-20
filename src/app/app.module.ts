import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GovGazetteComponent } from './gov-gazette/gov-gazette.component';
import { JobVacanciesComponent } from './job-vacancies/job-vacancies.component';
import { TendersComponent } from './tenders/tenders.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LastUpdatesComponent } from './last-updates/last-updates.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    GovGazetteComponent,
    JobVacanciesComponent,
    TendersComponent,
    AboutUsComponent,
    LastUpdatesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
