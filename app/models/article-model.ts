import {Section} from './section-model';

export class Article {
    status:string = "started";
    constructor(
        public _id:string = undefined,
        public title:string ="",
        public sections:Section[] = [],
        public createdBy:string = "",
        public createdOn:Date = new Date()
    ) {
        
    }
}