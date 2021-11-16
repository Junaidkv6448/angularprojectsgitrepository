import { Component, Input, OnInit } from '@angular/core';
import { ProfessorList } from '../professorlist';
import { Professor } from '../professor';

@Component({
  selector: 'app-displayprofessordetails',
  templateUrl: './displayprofessordetails.component.html',
  styleUrls: ['./displayprofessordetails.component.scss']
})
export class DisplayprofessordetailsComponent implements OnInit {

  @Input() selectedProfessor?: Professor;
  constructor() { }

  ngOnInit(): void {
  }

}
