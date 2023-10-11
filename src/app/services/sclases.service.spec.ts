import { TestBed } from '@angular/core/testing';

import { SClasesService } from './sclases.service';

describe('SClasesService', () => {
  let service: SClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SClasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
