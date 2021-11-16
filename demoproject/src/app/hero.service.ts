import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heros } from './hero';
import { HEROS } from './mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getheros():Heros[]
  // {

  //   return HEROS;
  // }

  getheros():Observable<Heros[]>
  {

    const heroes=of(HEROS);
    return heroes;
  }

}
