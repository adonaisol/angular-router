import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileActivateGuard } from './profile-activate.guard';

describe('ProfileActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileActivateGuard]
    });
  });

  it('should ...', inject([ProfileActivateGuard], (guard: ProfileActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
