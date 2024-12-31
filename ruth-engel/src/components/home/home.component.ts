import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
