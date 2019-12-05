import { TestBed, async, inject } from '@angular/core/testing';

import { RolGuard } from './rol.guard';

describe('RolGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolGuard]
    });
  });

  it('should ...', inject([RolGuard], (guard: RolGuard) => {
    expect(guard).toBeTruthy();
  }));
});
