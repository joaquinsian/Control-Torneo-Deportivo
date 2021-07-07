import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-charts-leaguebyid-chart',
  templateUrl: './admin-charts-leaguebyid-chart.component.html',
  styleUrls: ['./admin-charts-leaguebyid-chart.component.css']
})
export class AdminChartsLeaguebyidChartComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Gráficos del usuario");
  }

  ngOnInit(): void {
  }

}
