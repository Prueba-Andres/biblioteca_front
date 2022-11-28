import { TestBed } from '@angular/core/testing';

import { BibliotecasService } from './tematicas.service';

describe('BibliotecasService', () => {
  let service: BibliotecasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
