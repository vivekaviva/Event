import { TestBed } from '@angular/core/testing';

import { AllapiService } from './allapi.service';

describe('AllapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllapiService = TestBed.get(AllapiService);
    expect(service).toBeTruthy();
  });
});
