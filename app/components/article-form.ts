import {Component, Input, OnInit} from "@angular/core";

import {Section} from '../models/section-model';
import {Article} from "../models/article-model";
import {ArticleSvc} from "../svcs/article-svc";

@Component({
    selector: 'article-form',
    templateUrl:'./app/components/article-form.html'
})

export class ArticleForm implements OnInit{
    @Input() idArticle:string;

    listTitle:string = "Lista Sezioni";
    author:string = "Inserire il proprio nome";
    constructor(public modelSvc:ArticleSvc){
        this.idArticle = undefined; // TODO
    }
    public model:Article;

    ngOnInit() {
        this.model = this.modelSvc.find(this.idArticle);
    }
    

    getSections(){
        return this.model.sections;
    }

    saveSection(i:number, section:Section){
        i = i || this.model.sections.length;
        this.model.sections = [...this.model.sections.slice(0,i),
            section,
            ...this.model.sections.slice(i+1)]; 
    }

    onNewSection(){
        this.saveSection(undefined, new Section());
    }


    onRemoveSection(i:number){
        this.model.sections = [...this.model.sections.slice(0,i),
            ...this.model.sections.slice(i+1)];
    }

    onUp(i:number){
        if(i===0)
            this.model.sections = [...this.model.sections.slice(i+1),
                this.model.sections[i]];
        else
            this.model.sections = [...this.model.sections.slice(0,i-1),
                this.model.sections[i],
                this.model.sections[i-1],
                ...this.model.sections.slice(i+1)];
    }

    onDown(i:number){
        if(i == this.model.sections.length-1)
            this.model.sections = [this.model.sections[i],
                ...this.model.sections.slice(0,i)];
        else
            this.model.sections = [...this.model.sections.slice(0,i),
                this.model.sections[i+1],
                this.model.sections[i],
                ...this.model.sections.slice(i+2)];
    }

    // drag:Array<boolean> = [];
    // onMouse(i:number, pushed:boolean){
    //     console.log("mouse pushed:",pushed);
    //     this.drag[i] = pushed;
    // }
    // getDrag(i:number):boolean{
    //     console.log("drag ",i,this.drag[i]);
    //     if (this.drag[i] === undefined) this.drag[i] = false;
    //     return this.drag[i];
    // }

    onCopySection(i2Copy:number){
        this.saveSection(undefined, new Section(this.model.sections[i2Copy].title,this.model.sections[i2Copy].body));
    }


    // TODO: remove
    // only for testing
    // jsontest:string = "";

    onSave(){
        this.model.createdBy = this.author;
        var jsontest = JSON.stringify(this.model);
        alert(jsontest);
        this.modelSvc.save(this.model);
    }

    onSectionChange(i:number, text:string){
        console.log('chg:id,qty:',i,this.model.sections[i].body);
        this.model.sections[i].nc = text.length;
        this.model.sections[i].nw = text.split(' ').length;
    }

}