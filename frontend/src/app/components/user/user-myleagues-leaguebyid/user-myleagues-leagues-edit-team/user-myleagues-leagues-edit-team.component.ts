import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TeamService } from 'src/app/services/team/team.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-myleagues-leagues-edit-team',
  templateUrl: './user-myleagues-leagues-edit-team.component.html',
  styleUrls: ['./user-myleagues-leagues-edit-team.component.css']
})
export class UserMyleaguesLeaguesEditTeamComponent implements OnInit {
  idleague = "";
  idteam = "";
  paramsSubscription: Subscription = new Subscription;

  team = {
    nombre: "",
    imagen: ""
  }

  constructor(
    private titleService: Title,
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {

    this.titleService.setTitle("Editar equipo");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idteam = params['idteam'];
      console.log(this.idteam)
    });
    this.getAllData(this.idteam)
  }

  getAllData(newid: any) {
    this.teamService.getTeamById(newid).subscribe(
      res => {
        this.team = res.equipo;
      },
      err => {
        console.error(err)
      }
    );
  }

  editTeam(){
    Swal.fire('Equipo editado', 'El equipo ha sido editado con éxito', 'success');
  }
}
