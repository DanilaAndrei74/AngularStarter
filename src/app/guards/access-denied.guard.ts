import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccessDeniedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.checkAuthentication();

    if (!isAuthenticated) {
      // Redirect to the AccessDenied route
      this.router.navigate(['/accessDenied']);
      return false; // Block navigation
    }

    return true; // Allow navigation
  }

  private checkAuthentication(): boolean {
    return false; // Return false as authentication is not implemented yet
  }
}
