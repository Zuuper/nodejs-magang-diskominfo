import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggenIn() == false){
      Swal.fire(
        'Belum Login',
        'Login terlebih dahulu agar dapat melakukan pengajuan',
        'error'
      )
      this.router.navigate(['/auth/masuk'])
    }
    return true
  }
  
}
