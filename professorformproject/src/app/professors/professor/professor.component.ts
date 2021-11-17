import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProfessorService } from 'src/app/shared/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  constructor( public profService:ProfessorService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

    console.log(form.value)

  }

}
