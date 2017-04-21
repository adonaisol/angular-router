import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from './db/db.service'

@Injectable()
export class ProfileActivateGuard implements CanActivate {
    //id: string;
    student: object;
    constructor(private router: Router, private dbService: DbService) { }
    canActivate(
      route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(route.params.id)
        this.student = this.dbService.getUserData(route.params.id);  

          if (this.student != null) {
              return true;
          }
          
          this.router.navigate(['error']);
          return false;
          
      
    }
}
