import { Component, Input, OnInit } from '@angular/core';
import{Heros}from'../hero';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.scss']
})
export class HerodetailComponent implements OnInit {

  //declaring variable
  @Input() hero?:Heros;
  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?:Heros;
  onselect(heroo:Heros):void{
    this.selectedHero=heroo;
    console.log(this.selectedHero);
  }

  

}
