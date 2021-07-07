import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from './components/signup/signup.component';

import { UserMyleaguesComponent } from './components/user/user-myleagues/user-myleagues.component';
import { UserMyleaguesLeaguebyidComponent } from './components/user/user-myleagues-leaguebyid/user-myleagues-leaguebyid.component';
import { UserMyleaguesAddComponent } from './components/user/user-myleagues/user-myleagues-add/user-myleagues-add.component';
import { UserMyleaguesLeaguesEditTeamComponent } from './components/user/user-myleagues-leaguebyid/user-myleagues-leagues-edit-team/user-myleagues-leagues-edit-team.component';
import { AddTeamComponent } from './components/user/user-myleagues-leaguebyid/add-team/add-team.component';
import { GetTableComponent } from './components/user/user-myleagues-leaguebyid/get-table/get-table.component';
import { LeaguebyidChartComponent } from './components/user/user-myleagues-leaguebyid/leaguebyid-chart/leaguebyid-chart.component';
import { LeaguebyidJourneyComponent } from './components/user/user-myleagues-leaguebyid/leaguebyid-journey/leaguebyid-journey.component';
import { UserMyleaguesEditComponent } from './components/user/user-myleagues/user-myleagues-edit/user-myleagues-edit.component';

import { AdminAllUsersComponent } from './components/admin/admin-all-users/admin-all-users.component';
import { AdminAllUsersEditComponent } from './components/admin/admin-all-users/admin-all-users-edit/admin-all-users-edit.component';
import { AdminLeaguesComponent } from './components/admin/admin-leagues/admin-leagues.component';
import { AdminLeaguesLeaguebyidComponent } from './components/admin/admin-leagues/admin-leagues-leaguebyid/admin-leagues-leaguebyid.component';
import { AdminEditLeagueComponent } from './components/admin/admin-leagues/admin-leagues-leaguebyid/admin-edit-league/admin-edit-league.component';
import { AdminAddTeamComponent } from './components/admin/admin-leagues/admin-leagues-leaguebyid/admin-edit-league/admin-add-team/admin-add-team.component'; 
import { AdminChartsComponent } from './components/admin/admin-charts/admin-charts.component';
import { AdminChartsLeaguebyidComponent } from './components/admin/admin-charts/admin-charts-leaguebyid/admin-charts-leaguebyid.component';
import { AdminChartsLeaguebyidChartComponent } from './components/admin/admin-charts/admin-charts-leaguebyid/admin-charts-leaguebyid-chart/admin-charts-leaguebyid-chart.component';

const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  },{
    path: "signup",
    component: SignupComponent
  },{
    path: "",
    component: IndexComponent
  },{
    path: "admin/all-users",
    component: AdminAllUsersComponent
  },{
    path: "admin/all-users/edit/:iduser",
    component: AdminAllUsersEditComponent
  },{
    path: "user/my-leagues",
    component: UserMyleaguesComponent
  },{
    path: "user/my-leagues/:idleague",
    component: UserMyleaguesLeaguebyidComponent
  },{
    path: "user/my-leagues/:idleague/add-team",
    component: AddTeamComponent
  },{
    path: "user/my-leagues/:idleague/edit/:idteam",
    component: UserMyleaguesLeaguesEditTeamComponent
  },{
    path: "user/my-leagues/:idleague/get-table",
    component: GetTableComponent
  },{
    path: "user/my-leagues/:idleague/chart",
    component: LeaguebyidChartComponent
  },{
    path: "user/my-leagues/:idleague/journey",
    component: LeaguebyidJourneyComponent
  },{
    path: "user/my-leagues/add",
    component: UserMyleaguesAddComponent
  },{
    path: "user/my-leagues/edit/:id",
    component: UserMyleaguesEditComponent 
  },{
    path: "admin/leagues",
    component: AdminLeaguesComponent
  },{
    path: "admin/leagues/leagues-by-user-id",
    component: AdminLeaguesLeaguebyidComponent
  },{
    path: "admin/leagues/leagues-by-user-id/edit",
    component: AdminEditLeagueComponent
  },{
    path: "admin/leagues/leagues-by-user-id/edit/add-team",
    component: AdminAddTeamComponent
  },{
    path: "admin/charts",
    component: AdminChartsComponent
  },{
    path: "admin/charts/leagues-by-user-id",
    component: AdminChartsLeaguebyidComponent
  },{
    path: "admin/charts/leagues-by-user-id/chart",
    component: AdminChartsLeaguebyidChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
