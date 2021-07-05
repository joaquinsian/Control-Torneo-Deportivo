import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private titleService:Title, public loginService:LoginService) {
    this.titleService.setTitle("Inicio");
  }

  ngOnInit(): void {
  }

}
