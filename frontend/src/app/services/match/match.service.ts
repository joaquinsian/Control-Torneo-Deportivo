import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private URL = "https://control-deportivo-in6bm.herokuapp.com/torneodeportivo";

  constructor(private http: HttpClient) { }

  generateMatches(idleague: any) {
    return this.http.get<any>(this.URL + "/generarPartidos/" + idleague);
  }

  getMatchesByLeagueID(idleague: any){
    return this.http.get<any>(this.URL + "/obtenerPartidos/" + idleague);
  }
}
