import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingConcept';

  constructor( private authService :AuthService){}

  onLoginClick(){
    this.authService.login();

  }

  onLogoutClick(){
    this.authService.logout()
  }
}
