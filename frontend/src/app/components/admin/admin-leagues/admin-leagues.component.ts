import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-leagues',
  templateUrl: './admin-leagues.component.html',
  styleUrls: ['./admin-leagues.component.css']
})
export class AdminLeaguesComponent implements OnInit {

  users = [];

  constructor(private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("Todos los usuarios");
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
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
