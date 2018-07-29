import { TestBed, async, inject } from '@angular/core/testing';

import { FornotloggedGuard } from './fornotlogged.guard';

describe('FornotloggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FornotloggedGuard]
    });
  });

  it('should ...', inject([FornotloggedGuard], (guard: FornotloggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
