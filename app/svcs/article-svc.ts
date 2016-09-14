import {Injectable} from "@angular/core";
import {Article} from "../models/article-model";
import {Section} from "../models/section-model";

@Injectable()
export class ArticleSvc{

    find(id:string):Article {
        // GET
        return new Article();
    }

    save(item:Article){
        if (item._id === undefined){
            // post   
        }else{
           // put 
        }
    }

    remove(item:Article){
        if (item._id === undefined){
            return;   
        }else{
           // delete
        }
    }
}