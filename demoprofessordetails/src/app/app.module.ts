import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessordetailsComponent } from './professordetails/professordetails.component';
import { FormsModule } from '@angular/forms';
import { DisplayprofessordetailsComponent } from './displayprofessordetails/displayprofessordetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessordetailsComponent,
    DisplayprofessordetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
