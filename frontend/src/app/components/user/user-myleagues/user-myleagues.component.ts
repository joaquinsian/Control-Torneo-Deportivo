import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LeagueService } from 'src/app/services/league/league.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-myleagues',
  templateUrl: './user-myleagues.component.html',
  styleUrls: ['./user-myleagues.component.css']
})
export class UserMyleaguesComponent implements OnInit {
  league = [{
    _id: String,
    nombre: "Cargando...",
    image: ""
  }]

  constructor(private titleService: Title, private loginService: LoginService, private leagueService: LeagueService) {
    this.titleService.setTitle("Mis Ligas");
  }

  ngOnInit(): void {
    this.getMyLeagues();
  }

  getMyLeagues() {
    this.loginService.getIdentity(sessionStorage.getItem("authorization")).subscribe(
      res => {
        this.leagueService.getLeagueByUserId(sessionStorage.getItem("authorization"),res.sub).subscribe(
          res2 => {
            this.league = res2;
          },
          err2 => {
            console.error(err2);
          }
        )
      },
      err => {
        console.error(err);
      }
    )
  }

  deleteLeague(idleague: any){
    Swal.fire({
      title: '¿Está seguro de eliminar la liga?',
      text: 'Los equipos y resultados también se eliminarán',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.leagueService.deleteLeague(idleague).subscribe(
          res =>{
            Swal.fire(
              'Liga eliminada',
              'La liga ha sido eliminada exitosamente',
              'success'
            )

            this.getMyLeagues();
          },
          err => {
            console.error(err)
          }
        )
      }
    })
  }

}
