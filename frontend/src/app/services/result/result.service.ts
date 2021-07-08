import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private URL = "http://localhost:3000/torneodeportivo";

  constructor(private http: HttpClient) { }

  generateMatches(idleague: any) {
    return this.http.get<any>(this.URL + "/obtenerMarcadoresPorIDLiga/" + idleague);
  }

  addScore(idmatch: any, score: any) {
    return this.http.put<any>(this.URL + "/agregarMarcador/" + idmatch, score);
  }
}
