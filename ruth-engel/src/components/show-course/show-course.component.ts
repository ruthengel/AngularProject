import { Component } from '@angular/core';
import { CourseService } from '../../services/course-service/course.service';
import { Course, CourseSyllabus } from '../../models/Course';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-show-course',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './show-course.component.html',
  styleUrl: './show-course.component.css'
})
export class ShowCourseComponent {
  flag=false
  treeControl = new NestedTreeControl<CourseSyllabus>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CourseSyllabus>();

  constructor(courseService: CourseService) {
    // this.dataSource.data = courseService.getCourses().flatMap(c => c.Syllabus)
    this.dataSource.data = courseService.getCourses().map(c => ({
      name: c.NameCourse,
      children: c.Syllabus.map(syllabus => ({
        name: syllabus.name,        
        children: syllabus.children || []  
      })),
      semesterCount: c.semesters
    })   
    );
    //console.log(this.dataSource.data);

  }




  hasChild = (_: number, node: CourseSyllabus) => !!node.children && node.children.length > 0;
}
