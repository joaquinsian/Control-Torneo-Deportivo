import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Title } from "@angular/platform-browser";
import { LeagueService } from 'src/app/services/league/league.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-myleagues-add',
  templateUrl: './user-myleagues-add.component.html',
  styleUrls: ['./user-myleagues-add.component.css']
})
export class UserMyleaguesAddComponent implements OnInit {
  constructor(private titleService: Title, private loginService: LoginService, private leagueService:LeagueService) {
    this.titleService.setTitle("Agregar Liga");
  }

  league = {
    nombre: "",
    image: "",
    creador: ""
  }

  ngOnInit(): void {
    this.getUserId();
  }

  addLeague() {
    if(this.validURL(this.league.image)){
      this.leagueService.addLeague(sessionStorage.getItem("authorization"),this.league).subscribe(
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

  getUserId() {
    if (sessionStorage.getItem("authorization")) {
      this.loginService.getIdentity(sessionStorage.getItem("authorization")).subscribe(
        res => {
          this.league.creador = res.sub
        },
        err => {
          console.error(err)
        }
      )
    } else {
      console.log("No esta logueado")
    }
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
