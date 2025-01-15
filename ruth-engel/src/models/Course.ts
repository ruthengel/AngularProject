import { Subject } from "../subjectenum";

export class Course {
    constructor(
        public IdCourse: number,
        public NameCourse: string,
        public Subject: Subject,
        public semesters:number,
        public Syllabus:CourseSyllabus[]
    ) {}
}

export class CourseSyllabus{

    constructor(
        public name:string,
        public children?:CourseSyllabus[]
    ){}
}