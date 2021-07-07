import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private URL = "http://localhost:3000/torneodeportivo";

  constructor(private http: HttpClient) { }

  getTeamById(idteam: any) {
    return this.http.get<any>(this.URL + "/equipoId/" + idteam);
  }

  addTeam(team:any){
    return this.http.post<any>(this.URL + "/crearEquipo",team);
  }

  editTeam(idteam: any, team: any) {
    return this.http.put<any>(this.URL + "/editarEquipo/" + idteam,team);
  }

  deleteTeam(idteam: any){
    return this.http.delete<any>(this.URL + "/eliminarEquipo/" + idteam);
  }
}
