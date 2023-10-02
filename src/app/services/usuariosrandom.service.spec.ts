import { TestBed } from '@angular/core/testing';

import { UsuariosrandomService } from './usuariosrandom.service';

describe('UsuariosrandomService', () => {
  let service: UsuariosrandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosrandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
