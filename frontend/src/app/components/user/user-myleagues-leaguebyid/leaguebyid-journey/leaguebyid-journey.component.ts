import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team/team.service';
import { ResultService } from 'src/app/services/result/result.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leaguebyid-journey',
  templateUrl: './leaguebyid-journey.component.html',
  styleUrls: ['./leaguebyid-journey.component.css']
})
export class LeaguebyidJourneyComponent implements OnInit {
  idleague = "";
  results = [];

  score = {
    marcador_equipo_local: 0,
    marcador_equipo_visitante: 0,
    partido: ""
  }

  paramsSubscription: Subscription = new Subscription;

  constructor(private matchService: MatchService,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private resultService: ResultService,
    private titleService: Title
  ) { this.titleService.setTitle("Mis Jornadas"); }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idleague = params['idleague'];
    });

    this.getResults();
  }

  getResults() {
    this.resultService.generateMatches(this.idleague).subscribe(
      res => {
        this.results = res;
        console.log(res)
      },
      err => {
        console.error(err);

      }
    )
  }

  addScore(newidmatch: any) {
    Swal.fire({
      title: 'Agregue el marcador del local:',
      icon: 'info',
      input: "text",
      inputValue: "",
      showCancelButton: true,
      confirmButtonText: 'Siguiente',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.score.marcador_equipo_local = Number(result);
        Swal.fire({
          title: 'Agregue el marcador del visitante:',
          icon: 'info',
          input: "text",
          inputValue: "",
          showCancelButton: true,
          confirmButtonText: 'Agregar marcador',
          cancelButtonText: 'Cancelar'
        }).then((result2) => {
          this.score.marcador_equipo_visitante = Number(result2);
          this.resultService.addScore(newidmatch,this.score).subscribe(
            res => {
              this.getResults();
              Swal.fire("Marcador Agregado", "Ahora puede ver la tabla de resultados actualizada", "success")    
            },
            err => {
              console.error(err);
              
            }
          )
        })
      
      } else if (result.value == "") {
        Swal.fire(
          'Error',
          'Debe de escribir algo',
          'error'
        )
      }
    })
  }

  generateJourneys() {
    this.matchService.generateMatches(this.idleague).subscribe(
      res => {
        if (res.mensaje == "Datos Guardados") {
          window.location.reload();
        }
      },
      err => {
        console.error(err);
      }
    )
  }


  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
