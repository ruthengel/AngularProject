import { Teacher } from "./teacher";

export class Class{
    constructor(
        public level: string,
        public classNumber: number,
        public studentsNum: number,
        public teacherId:number
    ) {}
}

