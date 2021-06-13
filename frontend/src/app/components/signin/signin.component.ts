import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Iniciar Sesión");
  }

  ngOnInit(): void {
  }

}
