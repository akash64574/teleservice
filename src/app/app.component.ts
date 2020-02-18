import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dishApp';
  constructor(private router: Router) {}
  public signout(): void {
    localStorage.setItem('userid', '');
    localStorage.setItem('role', '');
    this.router.navigate(['/']);
  }
}
