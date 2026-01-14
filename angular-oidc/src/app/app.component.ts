import { Component } from '@angular/core';
import { HomeComponent } from './core/components/home.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [HomeComponent],
  template: '<app-home />',
  styles: '',
})
export class AppComponent {}
