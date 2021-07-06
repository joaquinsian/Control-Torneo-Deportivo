import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"

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
import { AdminLeaguesComponent } from './components/admin/admin-leagues/admin-leagues.component';
import { AdminLeaguesLeaguebyidComponent } from './components/admin/admin-leagues/admin-leagues-leaguebyid/admin-leagues-leaguebyid.component';
import { AdminEditLeagueComponent } from './components/admin/admin-leagues/admin-leagues-leaguebyid/admin-edit-league/admin-edit-league.component';
import { AdminAddTeamComponent } from './components/admin/admin-leagues/admin-leagues-leaguebyid/admin-edit-league/admin-add-team/admin-add-team.component';
import { AdminChartsComponent } from './components/admin/admin-charts/admin-charts.component';
import { AdminChartsLeaguebyidComponent } from './components/admin/admin-charts/admin-charts-leaguebyid/admin-charts-leaguebyid.component';
import { AdminChartsLeaguebyidChartComponent } from './components/admin/admin-charts/admin-charts-leaguebyid/admin-charts-leaguebyid-chart/admin-charts-leaguebyid-chart.component';
import { UserMyleaguesAddComponent } from './components/user/user-myleagues/user-myleagues-add/user-myleagues-add.component';
import { UserMyleaguesEditComponent } from './components/user/user-myleagues/user-myleagues-edit/user-myleagues-edit.component';



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
    LeaguebyidJourneyComponent,
    AdminLeaguesComponent,
    AdminLeaguesLeaguebyidComponent,
    AdminEditLeagueComponent,
    AdminAddTeamComponent,
    AdminChartsComponent,
    AdminChartsLeaguebyidComponent,
    AdminChartsLeaguebyidChartComponent,
    UserMyleaguesAddComponent,
    UserMyleaguesEditComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
