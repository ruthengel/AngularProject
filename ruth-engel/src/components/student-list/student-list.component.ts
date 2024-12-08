import { Component, ElementRef, ViewChild } from '@angular/core';
import { student } from '../../models/student';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { InformationPopupComponent } from '../information-popup/information-popup.component';
import { NgTemplateOutlet } from '@angular/common';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent, InformationPopupComponent, NgTemplateOutlet, CourseListComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  choice: number = 0;
  @ViewChild(InformationPopupComponent) child: InformationPopupComponent | undefined;
  @ViewChild('p') childP: ElementRef | undefined;
  arrStudent: student[] = [
    new student(1, "Chaya", 5, true, true, new Date(), false)
    , new student(2, "suri", 8, false, true, new Date(), false)
    , new student(3, "shoshi", 15, true, false, new Date(1, 12, 2024), false)];

  editStudent(item: student) {
    item.flag = true
  }
  DeleteStudent() {
    // if (this.childP != undefined)
    //   this.childP.nativeElement.innerText = "I changed you"
    if (this.child != undefined)
      this.child.showPopup('האם אתה בטוח שברצונך למחוק תלמיד זה')
  }
  addStudent() {
    this.choice = -1
  }
  saveInList(stud: student) {
    this.arrStudent.push(stud)
  }
  open(stud: student) {
    stud.flagShow = true
  }
  close(stud: student) {
    stud.flagShow = false
  }
}
