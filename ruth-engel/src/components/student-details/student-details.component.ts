import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { student } from '../../models/student';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input() currentStudent!: student ;
  @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();
  saveStud(id: number, name: string, age: number, active: string) {
    this.saveStudent.emit(new student(id, name, age,JSON.parse(active),true));
  }
}
