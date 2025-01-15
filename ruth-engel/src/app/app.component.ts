import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IconPipe } from '../pipes/icon-pipe/icon.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, HttpClientModule,
    IconPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currenthour() {
    let current = new Date().getHours();
    if (current > 6 && current < 12)
      return "Good-Morning:)";
    if (current > 12 && current < 19)
      return "Good-noon:)";
    return "Good-Night:)";
  }

  str: string = this.currenthour()


}
