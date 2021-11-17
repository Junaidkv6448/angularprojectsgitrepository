import { Injectable } from '@angular/core';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

   //create an instance of professor
   formData:Professor=new Professor();
  constructor() { }
}
