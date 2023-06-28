import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myTestGuardGuard } from './my-test-guard.guard';

describe('myTestGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myTestGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
