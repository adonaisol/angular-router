import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileDeactivateGuard } from './profile-deactivate.guard';

describe('ProfileDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDeactivateGuard]
    });
  });

  it('should ...', inject([ProfileDeactivateGuard], (guard: ProfileDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
