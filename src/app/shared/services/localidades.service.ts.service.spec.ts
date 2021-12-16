import { TestBed } from '@angular/core/testing';

import { Localidades.Service.TsService } from './localidades.service';

describe('Localidades.Service.TsService', () => {
  let service: Localidades.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Localidades.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
