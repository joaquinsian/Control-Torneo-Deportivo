import { TestBed } from '@angular/core/testing';

import { IsadminGuard } from './isadmin.guard';

describe('IsadminGuard', () => {
  let guard: IsadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
