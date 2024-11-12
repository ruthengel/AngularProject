import { Component } from '@angular/core';
import { student } from '../../student';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  choice: number = 0;
  // newstud: student = new student(0, "", 0, false, new Date(), false);
  arrStudent: student[] = [
    new student(1, "Chaya", 5, true, new Date(), false)
    , new student(2, "suri", 8, false, new Date(), false)
    , new student(3, "shoshi", 15, true, new Date(1, 12, 2024), false)];

  editStudent(item: student) {
    item.flag = true
  }
  addStudent() {
    this.choice = -1
  }
  saveInList(stud: student) {
    this.arrStudent.push(stud)
  }
}
