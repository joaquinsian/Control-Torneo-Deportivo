import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { LoginService } from 'src/app/services/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  role = "";
  username = "";
  constructor(private titleService:Title, public loginService:LoginService,private appcomponent:AppComponent) {
    this.titleService.setTitle("Inicio");
  }

  ngOnInit(): void {
    this.appcomponent.ngOnInit();
    this.getRole();
  }

  getRole(){
    if(sessionStorage.getItem("authorization")){
      this.loginService.getIdentity(sessionStorage.getItem("authorization")).subscribe(
        res => {
          this.role = res.rol;
          this.username = res.nombre;
        },
        err => {
          console.error(err)
        }
      )
    } else {
      console.log("No esta logueado")
    }
  }
}
