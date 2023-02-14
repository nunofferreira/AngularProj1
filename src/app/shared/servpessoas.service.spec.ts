import { TestBed } from '@angular/core/testing';

import { ServpessoasService } from './servpessoas.service';

describe('ServpessoasService', () => {
  let service: ServpessoasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServpessoasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
