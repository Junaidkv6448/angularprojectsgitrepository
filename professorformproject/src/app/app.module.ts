import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorsComponent } from './professors/professors.component';
import { ProfessorComponent } from './professors/professor/professor.component';
import { FormsModule } from '@angular/forms';
import{ProfessorService}from "./shared/professor.service"

@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProfessorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
