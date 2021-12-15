import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class SecureGuardGuard implements CanActivate {
  constructor(private auth: AuthService, public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggenIn() !== true){
      this.router.navigate(['auth/masuk'])
    }
    return true

  }
  
}
