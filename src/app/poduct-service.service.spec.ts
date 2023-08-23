import { TestBed } from '@angular/core/testing';

import { PoductServiceService } from './poduct-service.service';

describe('PoductServiceService', () => {
  let service: PoductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
