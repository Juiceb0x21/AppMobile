import { TestBed } from '@angular/core/testing';

import { CuentasserviceService } from './cuentasservice.service';

describe('CuentasserviceService', () => {
  let service: CuentasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
