import { CanActivateFn } from '@angular/router';

export const myTestGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
