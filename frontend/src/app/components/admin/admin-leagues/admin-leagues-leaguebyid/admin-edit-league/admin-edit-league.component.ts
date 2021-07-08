import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-edit-league',
  templateUrl: './admin-edit-league.component.html',
  styleUrls: ['./admin-edit-league.component.css']
})
export class AdminEditLeagueComponent implements OnInit {
  idleague = "";
  iduser = "";
  paramsSubscription: Subscription = new Subscription;

  league = {
    nombre: "",
    image: ""
  }

  teams = [];

  constructor(private titleService: Title,
    private route: ActivatedRoute,
    private leagueService: LeagueService) {
    this.titleService.setTitle("Editar Liga");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idleague = params['idleague'];
      this.iduser = params["iduser"];
    });
    this.getAllData(this.idleague);
    this.getMyTeams(this.idleague);
  }

  getAllData(newid: any) {
    this.leagueService.getLeagueById(newid).subscribe(
      res => {
        this.league.image = res.liga.image;
        this.league.nombre = res.liga.nombre;
      },
      err => {
        console.error(err)
      }
    );
  }

  getMyTeams(_idleague: String) {
    this.leagueService.getTeamsByLeagueId(_idleague).subscribe(
      res => {
        this.teams = res.equipos;
      },
      err => {
        console.error(err);
      }
    )
  }

  editLeague() {
    this.leagueService.editLeague(this.idleague, this.league).subscribe(
      res => {
        Swal.fire('Liga editada', 'La liga ha sido editada con éxito', 'success');
      },
      err => {
        console.error(err)
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
