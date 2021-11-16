import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprofessordetailsComponent } from './displayprofessordetails.component';

describe('DisplayprofessordetailsComponent', () => {
  let component: DisplayprofessordetailsComponent;
  let fixture: ComponentFixture<DisplayprofessordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayprofessordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayprofessordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
