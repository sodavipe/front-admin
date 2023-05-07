import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlBase = "https://norcentro-back-xz5ybaptnq-uc.a.run.app/auth";

  constructor(private router: Router) { }

  async login(data : {email: string, password: string}){
    await axios.post(`${this.urlBase}/login`, data).then((response)=>{
      localStorage.setItem("token",response.data.data.access_token)
      this.router.navigate(['/dashboard']);
    }).catch((error)=>{ console.log(error)})
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login'])
  }

  isLoggedIn(){
    const token = localStorage.getItem("token");
    if(!token) {
      return false
    }else{
      return true
    }
  }
}
