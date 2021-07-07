import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-charts',
  templateUrl: './admin-charts.component.html',
  styleUrls: ['./admin-charts.component.css']
})
export class AdminChartsComponent implements OnInit {

  users = [];

  constructor(private titleService:Title,private userService:UserService) {
    this.titleService.setTitle("Todos los usuarios");
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllClients().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.error(err);
      }
    );
  }
}
