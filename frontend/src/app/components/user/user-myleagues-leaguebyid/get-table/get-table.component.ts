import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-table',
  templateUrl: './get-table.component.html',
  styleUrls: ['./get-table.component.css']
})
export class GetTableComponent implements OnInit {
  id = "";
  paramsSubscription: Subscription = new Subscription;

  table = []

  constructor(private titleService: Title,
    private leagueService: LeagueService,
    private route: ActivatedRoute) {
    this.titleService.setTitle("Tabla de resultados");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = params['idleague'];
    });

    console.log(this.id);
    this.getTableData(this.id);
  }

  getTableData(newid:any){
    this.leagueService.getTableByLeagueId(newid).subscribe(
      res => {
        console.log(res)
        this.table = res.tabla;
      },
      err =>{
        console.error(err);
      }
    )
  }
}
