import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-myleagues-edit',
  templateUrl: './user-myleagues-edit.component.html',
  styleUrls: ['./user-myleagues-edit.component.css']
})
export class UserMyleaguesEditComponent implements OnInit {
  id = "";
  paramsSubscription: Subscription = new Subscription;

  league = {
    nombre: "",
    image: ""
  }

  constructor(private titleService: Title,
    private route: ActivatedRoute,
    private leagueService:LeagueService) {
    this.titleService.setTitle("Editar Liga");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getAllData(this.id);
  }

  getAllData(newid:any){
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

  editLeague(){
    this.leagueService.editLeague(this.id, this.league).subscribe(
      res => {
        Swal.fire('Liga editada', 'La liga ha sido editada con éxito', 'success');
      },
      err => {
        console.error(err)
      }
    );
  }

  ngOnDestroy():void {
    this.paramsSubscription.unsubscribe();
  }
}
