import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "service/auth.service";
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isLoggedIn()) {
        // logged
        return true; 
      }
      // not logged
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }