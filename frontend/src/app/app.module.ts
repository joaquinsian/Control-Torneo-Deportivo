import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { IndexComponent } from './components/index/index.component';
import { AdminAllUsersComponent } from './components/admin/admin-all-users/admin-all-users.component';
import { UserMyleaguesComponent } from './components/user/user-myleagues/user-myleagues.component';
import { UserMyleaguesLeaguebyidComponent } from './components/user/user-myleagues-leaguebyid/user-myleagues-leaguebyid.component';
import { AddTeamComponent } from './components/user/user-myleagues-leaguebyid/add-team/add-team.component';
import { GetTableComponent } from './components/user/user-myleagues-leaguebyid/get-table/get-table.component';
import { LeaguebyidChartComponent } from './components/user/user-myleagues-leaguebyid/leaguebyid-chart/leaguebyid-chart.component';
import { LeaguebyidJourneyComponent } from './components/user/user-myleagues-leaguebyid/leaguebyid-journey/leaguebyid-journey.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    IndexComponent,
    AdminAllUsersComponent,
    UserMyleaguesComponent,
    UserMyleaguesLeaguebyidComponent,
    AddTeamComponent,
    GetTableComponent,
    LeaguebyidChartComponent,
    LeaguebyidJourneyComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
