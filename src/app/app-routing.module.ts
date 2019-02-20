import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInformationComponent } from './user-information/user-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GovGazetteComponent } from './gov-gazette/gov-gazette.component';
import { HomeComponent } from './home/home.component';
import { JobVacanciesComponent } from './job-vacancies/job-vacancies.component';
import { TendersComponent } from './tenders/tenders.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LastUpdatesComponent } from './last-updates/last-updates.component';




const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  
  { path: 'userinformation',   component: UserInformationComponent },
  { path: 'aboutus',   component: AboutUsComponent },
  { path: 'lastupdates',   component: LastUpdatesComponent },

  { path: 'govgazette',   component: GovGazetteComponent },
  { path: 'home',   component: HomeComponent },
  { path: 'jobvacancies',   component: JobVacanciesComponent },
  { path: 'tenders',   component: TendersComponent },
  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserInformationComponent,
                                  AboutUsComponent,
                                  LastUpdatesComponent,
                                  GovGazetteComponent,
                                  HomeComponent,
                                  JobVacanciesComponent,
                                  TendersComponent,
                                  PageNotFoundComponent,
                                  ]