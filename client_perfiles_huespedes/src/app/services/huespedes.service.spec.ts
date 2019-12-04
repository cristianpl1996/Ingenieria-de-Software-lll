import { TestBed } from '@angular/core/testing';

import { HuespedesService } from './huespedes.service';

describe('HuespedesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuespedesService = TestBed.get(HuespedesService);
    expect(service).toBeTruthy();
  });
});
