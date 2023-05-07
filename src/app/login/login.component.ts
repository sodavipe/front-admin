import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private _authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  async login(){
    await this._authService.login({ email: this.email, password: this.password });
  }

}
