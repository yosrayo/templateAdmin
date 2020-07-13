import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurGuard implements CanActivate {
  
  

  constructor(private router: Router) {}




  canActivate(route: ActivatedRouteSnapshot): boolean {
            // this will be passed from the route config
            // on the data property

            if (JSON.parse(localStorage.getItem('grade')) == 'livreur') {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }

              }


}
