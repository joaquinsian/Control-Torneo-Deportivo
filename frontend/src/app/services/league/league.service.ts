import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private URL = "http://localhost:3000/torneodeportivo";

  constructor(private http: HttpClient) { }

  addLeague(token: any, league: any) {
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.post<any>(this.URL + "/crearLiga", league, { headers: allheaders });
  }

  getLeagueByUserId(token: any, iduser: any) {
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.get<any>(this.URL + "/ligasUser/" + iduser, { headers: allheaders });
  }

  getLeagueById(idleague: any) {
    return this.http.get<any>(this.URL + "/mostrarLigaID/" + idleague);
  }

  getTeamsByLeagueId(idleague: any){
    return this.http.get<any>(this.URL + "/equiposLiga/" + idleague);
  }

  editLeague(idleague: any, league: any) {
    return this.http.put<any>(this.URL + "/editarLiga/" + idleague, league);
  }

  deleteLeague(idleague: any) {
    return this.http.delete<any>(this.URL + "/eliminarLiga/" + idleague);
  }
}
