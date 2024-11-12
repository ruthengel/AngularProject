import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,StudentListComponent,StudentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ruth-engel';
  currenthour ()  {
    let current = new Date().getHours();
    if (current > 6 && current < 12)
      return "Good-Morning:)";
     if(current>12&&current<19)
     return "Good-noon:)";
    return "Good-Night:)";
  }
}
