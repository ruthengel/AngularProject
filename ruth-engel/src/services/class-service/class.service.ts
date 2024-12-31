import { Injectable } from '@angular/core';
import { Class } from '../../models/class';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classes =
    [
      new Class("A", 1, 35, 5),
      new Class("B", 3, 10, 8),
      new Class("C", 1, 50, 329)
    ]
  constructor() { }

  getClasses() {
    return this.classes;
  }

  addClass(clas: Class) {
    this.classes.push(clas)
  }
}
