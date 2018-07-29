import { TestBed, async, inject } from '@angular/core/testing';

import { ForloggedGuard } from './forlogged.guard';

describe('ForloggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForloggedGuard]
    });
  });

  it('should ...', inject([ForloggedGuard], (guard: ForloggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
