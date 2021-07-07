import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-all-users',
  templateUrl: './admin-all-users.component.html',
  styleUrls: ['./admin-all-users.component.css']
})
export class AdminAllUsersComponent implements OnInit {

  users = [];

  constructor(private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("Todos los Usuarios");
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.error(err);

      }
    );
  }

  deleteUser(newid:any) {
    Swal.fire({
      title: '¿Está seguro de eliminar al usuario?',
      text: 'Se perderán todos sus datos junto con sus ligas',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(newid,sessionStorage.getItem("authorization")).subscribe(
          res => {
            this.getAllUsers();
            Swal.fire("Usuario Eliminado", "El usuario ha sido eliminado exitosamente","success");
          },
          err => {
            console.error(err);
          }
        )
      }
    })
  }
}
