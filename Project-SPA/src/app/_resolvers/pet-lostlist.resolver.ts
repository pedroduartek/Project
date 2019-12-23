import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { PetService } from '../_services/pet.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pet } from '../_models/pet';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class PetLostListResolver implements Resolve<Pet[]> {
    constructor(private petSerivce: PetService, private router: Router, private alertify: AlertifyService, private authService : AuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Pet[]> {
        return this.petSerivce.getLostPets(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
