import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'frontend';

  role = "";
  constructor(public loginService:LoginService){
  }

  ngOnInit(): void {
    this.getRole();
  }

  getRole(){
    if(sessionStorage.getItem("authorization")){
      this.loginService.getIdentity(sessionStorage.getItem("authorization")).subscribe(
        res => {
          this.role = res.rol;
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
