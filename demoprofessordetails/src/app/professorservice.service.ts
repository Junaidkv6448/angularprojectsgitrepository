import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { ProfessorList } from './professorlist';

@Injectable({
  providedIn: 'root'
})
export class ProfessorserviceService {

  constructor() { }

  getProfessor():Professor[]
  {
    return ProfessorList
  }
}
