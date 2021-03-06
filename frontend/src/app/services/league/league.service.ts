import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private URL = "https://control-deportivo-in6bm.herokuapp.com/torneodeportivo";

  constructor(private http: HttpClient) { }

  addLeague(token: any, league: any) {
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.post<any>(this.URL + "/crearLiga", league, { headers: allheaders });
  }

  addLeagueAdmin(token: any, league: any){
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.post<any>(this.URL + "/crearLigaAdmin", league, { headers: allheaders });
  }

  getLeagueByUserId(token: any, iduser: any) {
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.get<any>(this.URL + "/ligasUser/" + iduser, { headers: allheaders });
  }

  generateReport(idLeague:any){
    return this.http.get<any>(this.URL + "/reporteTablaLiga/" + idLeague);
  }

  getLeagueById(idleague: any) {
    return this.http.get<any>(this.URL + "/mostrarLigaID/" + idleague);
  }

  getTeamsByLeagueId(idleague: any){
    return this.http.get<any>(this.URL + "/equiposLiga/" + idleague);
  }

  getTableByLeagueId(idleague:any){
    return this.http.get<any>(this.URL + "/tablaLiga/" + idleague);
  }

  editLeague(idleague: any, league: any) {
    return this.http.put<any>(this.URL + "/editarLiga/" + idleague, league);
  }

  deleteLeague(idleague: any) {
    return this.http.delete<any>(this.URL + "/eliminarLiga/" + idleague);
  }
}
