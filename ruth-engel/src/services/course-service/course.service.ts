import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';
import { Subject } from '../../subjectenum';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses = [
    new Course(1, "Hitec", Subject.Hitec, 5,
      [{
        name: "C#",
        children: [{ name: "Mat" }, { name: "oop" }]
      },
      { name: "C++" }
      ]),
    new Course(2, "Article", Subject.Article, 1,
      [
        {
          name: "ArticleTrapy",
          children: [{ name: "Pisyl" }]
        }
      ]),
    new Course(3, "Teaching", Subject.Teaching, 2,
      [
        {
          name: "didactica",
          children: [{ name: 'teac1' }]
        }
      ])
  ];

  getCourses() {
    return this.courses;
  }


}
