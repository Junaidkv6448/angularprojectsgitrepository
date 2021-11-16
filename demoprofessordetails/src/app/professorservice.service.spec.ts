import { TestBed } from '@angular/core/testing';

import { ProfessorserviceService } from './professorservice.service';

describe('ProfessorserviceService', () => {
  let service: ProfessorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
