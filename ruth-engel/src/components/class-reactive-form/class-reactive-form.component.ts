import { Component, OnInit } from '@angular/core';
import { Class } from '../../models/class';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassService } from '../../services/class-service/class.service';


@Component({
  selector: 'app-class-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './class-reactive-form.component.html',
  styleUrl: './class-reactive-form.component.css'
})
export class ClassReactiveFormComponent implements OnInit {
  classes: Class[] = []
  classForm!: FormGroup;
  it: boolean = false

  constructor(private classervice: ClassService, private fb: FormBuilder) {
    this.classes = classervice.getClasses()
  }

  ngOnInit(): void {
    this.classForm = this.fb.group({
      level: ["", [Validators.required, Validators.maxLength(1), Validators.pattern("^[A-G]")]],
      classNum: [null, [Validators.required, Validators.max(7)]],
      studentsNum: [null, [Validators.required, Validators.max(50)]],
      teacherId: [null, Validators.required]
    })
  }

  get class() {
    return this.classForm.controls;
  }

  onSubmit() {
    console.log()
    const formValue = this.classForm.value
    if (!formValue)
      return
    const classNew: Class = new Class(formValue.level, formValue.classNum, formValue.studentsNum, formValue.teacherId)
    if (this.classes.find(t => t.classNumber == classNew.classNumber && t.level == classNew.level))
      return;
    this.classervice.addClass(classNew)
  }

  open() {
    this.it = true
  }

  close() {
    this.it = false
  }
}


