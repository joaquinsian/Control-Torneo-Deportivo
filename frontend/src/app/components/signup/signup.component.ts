import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router"
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    nombre: "",
    usuario: "",
    email: "",
    password: ""
  }

  constructor(private titleService: Title, private loginService: LoginService, private router: Router) {
    this.titleService.setTitle("Registrarse");
  }

  ngOnInit(): void {
  }

  signUp() {
    this.loginService.signUp(this.user).subscribe(
      res => {
        Swal.fire('Registro exitoso', 'El usuario ha sido registrado exitosamente', 'success')
      },
      err => {
        switch (err.error.mensaje) {
          case "El usuario es existente":
            Swal.fire('Error :(', 'El usuario ya existe, intente otro nombre de usuario', 'error')
            break;
        }
      }
    )
  }
}
