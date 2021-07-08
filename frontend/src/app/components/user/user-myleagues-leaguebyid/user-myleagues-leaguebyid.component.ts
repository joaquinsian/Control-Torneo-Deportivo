import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import { TeamService } from 'src/app/services/team/team.service';
import Swal from 'sweetalert2';

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
    nombre: "Cargando...",
    image: ""
  }

  paramsSubscription: Subscription = new Subscription;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private leagueService: LeagueService,
    private teamService: TeamService,
    private router: Router
  ) {
    this.titleService.setTitle("Equipos de liga");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idleague = params['idleague'];
    });

    this.getMyLeagueData(this.idleague);
    this.getMyTeams(this.idleague);
  }


  addTeam() {
    if (this.teams.length >= 10) {
      Swal.fire(
        'Error: Muchos equipos',
        'Solo se pueden tener hasta 10 equipos',
        'error'
      )
    } else {
      this.router.navigate(["/user/my-leagues/league/" + this.idleague + "/add-team"]);
    }
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
      },
      err => {
        console.error(err);
      }
    )
  }

  deleteTeam(idteam: any) {
    Swal.fire({
      title: '¿Está seguro de eliminar el equipo?',
      text: 'Sus registros también se eliminarán',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.teamService.deleteTeam(idteam).subscribe(
          res => {
            this.getMyTeams(this.idleague);
            Swal.fire(
              'Equipo eliminado',
              'El equipo ha sido eliminado exitosamente',
              'success'
            )
          },
          err => {
            console.error(err);

          }
        )
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
