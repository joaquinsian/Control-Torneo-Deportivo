import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private URL = "http://localhost:3000/torneodeportivo";

  constructor(private http: HttpClient) { }

  generateMatches(idleague: any) {
    return this.http.get<any>(this.URL + "/generarPartidos/" + idleague);
  }

  getMatchesByLeagueID(idleague: any){
    return this.http.get<any>(this.URL + "/obtenerPartidos/" + idleague);
  }
}
