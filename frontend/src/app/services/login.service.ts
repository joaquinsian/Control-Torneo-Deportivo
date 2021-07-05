import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = "http://localhost:3000/torneodeportivo";
  constructor(private http:HttpClient, private router:Router) { }

  signIn(user:any) {
    return this.http.post<any>(this.URL + "/login", user);
  }

  signUp(user:any){
    return this.http.post<any>(this.URL + "/registro", user);
  }

  loggedIn(): Boolean {
    return !!sessionStorage.getItem("authorization");
  }

  logout() {
    sessionStorage.removeItem("authorization");
    this.router.navigate(["/"])
  }
}
