import { Component, OnInit } from '@angular/core';
import { Heros } from '../hero'
import {HEROS} from '../mock-hero'
import{HeroService}from '../hero.service'

@Component({
  selector: 'heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  // heroname:any;
  //wis='wise';
  Hero: Heros = {
    id: 1,
    name: 'nithin'
  };

 // selectedHero:Heros;
  //number ofelements
  //noofheros=HEROS;
  noofheros:Heros[];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
   
    this.getHeros();

  }

  selectedHero?:Heros;
  //click event
  onselect(heroo:Heros):void{
    this.selectedHero=heroo;
    console.log(this.selectedHero);
  }

  //get data from service

  getHeros():void{
    
    this.heroService.getheros()
    .subscribe(h=>this.noofheros=h);
  }


}
