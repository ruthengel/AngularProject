import { Subject } from "../subjectenum";

export class Course {
    constructor(
        public IdCourse: number,
        public NameCourse: string,
        public Subject: Subject,
    ) {}
}
