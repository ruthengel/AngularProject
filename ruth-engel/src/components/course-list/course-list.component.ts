import { Component, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course-service/course.service';
import { student } from '../../models/student';
import { HighlightDirective } from '../../directives/highlight-directive/highlight.directive';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses: Course[] | undefined;

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses()
  }

  
}
