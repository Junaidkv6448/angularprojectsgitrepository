import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import {ProfessorList} from "../professorlist";
import {ProfessorserviceService}from"../professorservice.service"

@Component({
  selector: 'app-professordetails',
  templateUrl: './professordetails.component.html',
  styleUrls: ['./professordetails.component.scss']
})
export class ProfessordetailsComponent implements OnInit {

  professorlist:Professor[];
  constructor(private professorservice:ProfessorserviceService) { }

  ngOnInit(): void {
    this.getProfessors();
  }
 // professorlist=ProfessorList;
  selectedProfessor?:Professor;
  onselect(professor:Professor):void{
    this.selectedProfessor=professor;
    console.log(this.selectedProfessor);
  }

  getProfessors():void{
    this.professorlist=this.professorservice.getProfessor();
  }

}
