import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessordetailsComponent } from './professordetails.component';
import {Professor} from '../professor';


describe('ProfessordetailsComponent', () => {
  let component: ProfessordetailsComponent;
  let fixture: ComponentFixture<ProfessordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
