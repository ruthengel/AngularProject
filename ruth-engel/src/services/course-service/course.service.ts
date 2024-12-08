import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';
import { Subject } from '../../subjectenum';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private courses = [
    new Course(1,"ggg",Subject.Hitec),
    new Course(2,"aaa",Subject.Article),
    new Course(3,"sss",Subject.Teaching)
   ];

   getCourses() {
     return this.courses;
   }
 
  
}
