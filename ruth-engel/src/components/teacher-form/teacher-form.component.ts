import { Component } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher-service/teacher.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  teachers: Teacher[] = []
  teacher: Teacher = new Teacher(1, '', [])

  constructor(private teacherservice: TeacherService) {
    this.teachers = teacherservice.getTeachers()
  }

  OnSubmit() {
    if (this.teachers.find(t => t.Id == this.teacher.Id))
      this.teacherservice.updateTeacher(this.teacher)
    else
      this.teacherservice.addTeacher(this.teacher)
  }





}
