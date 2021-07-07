import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-charts-leaguebyid',
  templateUrl: './admin-charts-leaguebyid.component.html',
  styleUrls: ['./admin-charts-leaguebyid.component.css']
})
export class AdminChartsLeaguebyidComponent implements OnInit {
  iduser = "";
  user = {
    _id: "",
    nombre: String
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

  }

}
