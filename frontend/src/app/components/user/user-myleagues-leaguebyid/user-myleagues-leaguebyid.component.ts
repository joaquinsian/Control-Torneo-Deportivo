import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';

@Component({
  selector: 'app-user-myleagues-leaguebyid',
  templateUrl: './user-myleagues-leaguebyid.component.html',
  styleUrls: ['./user-myleagues-leaguebyid.component.css']
})
export class UserMyleaguesLeaguebyidComponent implements OnInit {
  idleague = "";
  teams = [{
    _id: String,
    imagen: "",
    nombre: "Cargando..."
  }];

  league = {
    _id: String,
    nombre:"Cargando...",
    image: ""
  }

  paramsSubscription: Subscription = new Subscription;

  constructor(private titleService: Title, private route: ActivatedRoute, private leagueService: LeagueService) {
    this.titleService.setTitle("Equipos de liga");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idleague = params['idleague'];
    });

    this.getMyLeagueData(this.idleague);
    this.getMyTeams(this.idleague);
  }

  getMyLeagueData(_idleague: String) {
    this.leagueService.getLeagueById(_idleague).subscribe(
      res => {
        this.league = res.liga;
      },
      err => {
        console.error(err);
      }
    )
  }

  getMyTeams(_idleague: String) {
    this.leagueService.getTeamsByLeagueId(_idleague).subscribe(
      res => {
        this.teams = res.equipos;
        console.log(res);
      },
      err => {
        console.error(err);
      }
    )
  }

}
