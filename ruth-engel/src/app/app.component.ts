import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
import { TeacherFormComponent } from '../components/teacher-form/teacher-form.component';
import { IconPipe } from '../pipes/icon-pipe/icon.pipe';
import { HomeComponent } from '../components/home/home.component';
import { ClassReactiveFormComponent } from "../components/class-reactive-form/class-reactive-form.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, StudentListComponent,
    StudentDetailsComponent, TeacherFormComponent, IconPipe, RouterOutlet, RouterLink, RouterLinkActive, ClassReactiveFormComponent],
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
