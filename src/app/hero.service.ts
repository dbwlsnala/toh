import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES).pipe(delay(3000));
    return this.http.get<Hero[]>(`${environment.HOST}/api/heroes`);
  }
}
