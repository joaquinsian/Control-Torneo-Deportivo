import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LeagueService } from 'src/app/services/league/league.service';
import jspdf from 'jspdf';
import * as f from "jspdf";
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leaguebyid-chart',
  templateUrl: './leaguebyid-chart.component.html',
  styleUrls: ['./leaguebyid-chart.component.css']
})
export class LeaguebyidChartComponent implements OnInit {
  paramsSubscription: Subscription = new Subscription;
  idleague= "";
  table = []
  constructor(private route: ActivatedRoute,
    private leagueService: LeagueService) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idleague = params['idleague']
    });
  }

  exportAsPDF(divId:any)
    {
        let data:any = document.getElementById('MyDIv');  
        html2canvas(data).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
        // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
        pdf.save('Filename.pdf');   
      }); 
    }

  ngOnInit(): void {
    this.getTableData(this.idleague);
  }

  generarReporte(){
    this.leagueService.generateReport(this.idleague).subscribe(
      res => {
        this.downloadFile(res)
        Swal.fire("Felicidades","Ha descargado su pdf","success");
      },
      err => {
        console.error(err);
        
      }
    )
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

  getTableData(newid:any){
    this.leagueService.getTableByLeagueId(this.idleague).subscribe(
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
