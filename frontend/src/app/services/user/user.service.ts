import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = "http://localhost:3000/torneodeportivo";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.URL + "/obtenerUsuarios");
  }

  getUserById(iduser: any) {
    return this.http.get<any>(this.URL + "/obtenerUsuario/" + iduser);
  }

  editUser(iduser: any, user: any) {
    return this.http.put<any>(this.URL + "/editarUsuario/" + iduser, user);
  }

  upgradeUser(iduser: any) {
    return this.http.put<any>(this.URL + "/convertirAdmin/" + iduser, {});
  }

  deleteUser(iduser: any, token: any) {
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.delete<any>(this.URL + "/eliminarUsuario/" + iduser, { headers: allheaders });
  }
}