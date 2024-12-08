import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers =
    [
      new Teacher(1, "Sara", ["a1", "d3"]),
      new Teacher(2, "Gila", ["a2"]),
      new Teacher(3, "Chava", ["c3", "b5"])
    ]
  constructor() { }

  getTeachers() {
    return this.teachers;
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher)
  }

  updateTeacher(teacher: Teacher) {
    const teacherToUpdate = this.teachers.find(c => c.Id == teacher.Id)
    if (teacherToUpdate) {
      teacherToUpdate.Name = teacher.Name
      teacherToUpdate.MyClasses = teacher.MyClasses
    }
    else
      alert(`Teacher with ${teacher.Id} doesn't exist!`)

  }

  deleteTeacher(teacher: Teacher) {
    const index = this.teachers.findIndex(c => c.Id == teacher.Id)
    if (index != -1)
      this.teachers.splice(index, 1)
    else
      alert(`Teacher with ${teacher.Id} doesn't exist!`)
  }
}
