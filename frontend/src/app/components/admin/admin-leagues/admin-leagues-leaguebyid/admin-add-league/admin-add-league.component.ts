import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Title } from "@angular/platform-browser";
import { LeagueService } from 'src/app/services/league/league.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-league',
  templateUrl: './admin-add-league.component.html',
  styleUrls: ['./admin-add-league.component.css']
})
export class AdminAddLeagueComponent implements OnInit {
  constructor(private titleService: Title,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private leagueService:LeagueService) {
    this.titleService.setTitle("Agregar Liga");
  }

  iduser ="";

  paramsSubscription: Subscription = new Subscription;

  league = {
    nombre: "",
    image: "",
    creador: ""
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.iduser = params['iduser'];
      this.league.creador = this.iduser;
    });
  }

  addLeague() {
    if(this.validURL(this.league.image)){
      this.leagueService.addLeagueAdmin(sessionStorage.getItem("authorization"),this.league).subscribe(
        res => {
          Swal.fire('Liga agregada con éxito', 'Ahora puede agregarle equipos', 'success')
        },
        err => {
          console.error(err)
        }
      );
    } else {
      Swal.fire('Error :(', 'La URL no es válida', 'error')
    };
  }

  validURL(str:string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
}
