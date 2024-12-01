export class student {
    constructor(public Id: number,
        public Name: string,
        public Age: number,
        public Active: boolean,
        public IsPayed:boolean,
        public d?: Date,
        public flag?: boolean,
        public flagShow:boolean=false,
        
    ) { }
}
