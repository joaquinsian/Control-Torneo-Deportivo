import { TestBed } from '@angular/core/testing';

import { IsclientGuard } from './isclient.guard';

describe('IsclientGuard', () => {
  let guard: IsclientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsclientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
