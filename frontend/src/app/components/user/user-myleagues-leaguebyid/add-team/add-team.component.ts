import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TeamService } from 'src/app/services/team/team.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team = {
    nombre: "",
    imagen: "",
    liga: ""
  };

  paramsSubscription: Subscription = new Subscription;

  constructor(private titleService: Title,
    private teamService: TeamService,
    private route: ActivatedRoute) {
    this.titleService.setTitle("Agregar equipo");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.team.liga = params['idleague'];
    });
  }

  addTeam() {
    if (this.validURL(this.team.imagen)) {
      this.teamService.addTeam(this.team).subscribe(
        res => {
          Swal.fire('Equipo agregado', 'El equipo ha sido agregado con éxito', 'success');
        },
        err => {
          console.error(err);
  
        }
      )
    } else {
      Swal.fire('Error :(', 'La URL no es válida', 'error')
    }
  }

  validURL(str: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

}
