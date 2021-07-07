import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-all-users-edit',
  templateUrl: './admin-all-users-edit.component.html',
  styleUrls: ['./admin-all-users-edit.component.css']
})
export class AdminAllUsersEditComponent implements OnInit {
  iduser = "";
  user = {
    nombre: "",
    usuario: "",
    email: ""
  }

  paramsSubscription: Subscription = new Subscription;

  constructor(private titleService: Title, 
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    this.titleService.setTitle("Editar Usuario");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.iduser = params['iduser'];
      console.log(this.iduser)
    });

    this.getAllData(this.iduser);
  }

  getAllData(newid: any) {
    this.userService.getUserById(this.iduser).subscribe(
      res => {
        this.user.nombre = res.usuarioEncontrado.nombre;
        this.user.usuario = res.usuarioEncontrado.usuario;
        this.user.email = res.usuarioEncontrado.email;
        if(res.usuarioEncontrado.rol === "Admin_App"){
          this.router.navigate(["/admin/all-users"]);
        }
      },
      err => {
        console.error(err)
      }
    );
  }

  editUser() {
    this.userService.editUser(this.iduser,this.user).subscribe(
      res => {
        Swal.fire('Usuario editado', 'El usuario fue editado exitosamente', 'success')
        this.getAllData(this.iduser);
      },
      err => {
        console.error(err)
      }
    )
  }

  upgradeUser(){
    Swal.fire({
      title: '¿Está seguro de convertirlo a administrador?',
      text: 'El cambio no se podrá revertir y no se podrá editar ni eliminar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.upgradeUser(this.iduser).subscribe(
          res => {
            this.router.navigate(["/admin/all-users"]);
          },
          err => {
            console.error(err);
          }
        )
      }
    })
  }
}
