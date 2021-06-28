import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-all-users',
  templateUrl: './admin-all-users.component.html',
  styleUrls: ['./admin-all-users.component.css']
})
export class AdminAllUsersComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Todos los Usuarios");
  }

  ngOnInit(): void {
  }

}
