import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `   
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <a (click)="auth.logout({ returnTo: document.location.origin })" >
        Log out
      </a>
    </ng-container>

    <ng-template #loggedOut>
      <a (click)="auth.loginWithRedirect()" >Log in</a>
    </ng-template>    
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(): void {  
    
  }
  
}
