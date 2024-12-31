import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher-service/teacher.service';
//import { FormGroupDirective, FormGroupName,  NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})

export class TeacherFormComponent implements OnInit {
  teachers: Teacher[] = []
  it: boolean = false

  //teacher: Teacher = new Teacher(1, '', [])
  teacherForm!: FormGroup;
  constructor(private teacherservice: TeacherService, private fb: FormBuilder) {
    this.teachers = teacherservice.getTeachers()
  }

  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      Id: [null, Validators.required, Validators.minLength(7)],
      Name: ['', Validators.required, Validators.minLength(5)],
      Class: ['', Validators.required]
    });
  }

  OnSubmit() {
    const formValue = this.teacherForm.value;
    if (!formValue)
      return
    const teachnew: Teacher = new Teacher(formValue.Id, formValue.Name, formValue.Class.split(' '))
    if (this.teachers.find(t => t.Id == teachnew.Id))
      this.teacherservice.updateTeacher(teachnew)
    else
      this.teacherservice.addTeacher(teachnew)
  }
  open() {
    this.it = true
  }

  close() {
    this.it = false
  }
}
