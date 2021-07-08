import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-leagues-leaguebyid',
  templateUrl: './admin-leagues-leaguebyid.component.html',
  styleUrls: ['./admin-leagues-leaguebyid.component.css']
})
export class AdminLeaguesLeaguebyidComponent implements OnInit {

  iduser = "";
  user = {
    _id: "",
    nombre: "Cargando"
  };

  leagues = []

  paramsSubscription: Subscription = new Subscription;

  constructor(private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private leagueService: LeagueService) {
    this.titleService.setTitle("Ligas del usuario");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.iduser = params['iduser'];
    });
    this.getUser();
    this.getLeagues();
  }

  getUser(): void {
    this.userService.getUserById(this.iduser).subscribe(
      res => {
        this.user._id = res.usuarioEncontrado._id;
        this.user.nombre = res.usuarioEncontrado.nombre;
      },
      err => {
        console.error(err);
      }
    )
  }

  getLeagues() {
    this.leagueService.getLeagueByUserId(sessionStorage.getItem("authorization"),this.iduser).subscribe(
      res => {
        this.leagues = res;
      },
      err => {
        console.error(err);
      }
    )
  }
}
