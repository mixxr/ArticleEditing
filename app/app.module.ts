import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {ArticleForm} from './components/article-form';
import { ArticleSvc } from './svcs/article-svc';

// DnD
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd';


@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ArticleForm, DND_DIRECTIVES],
  bootstrap: [ AppComponent ],
  providers: [ ArticleSvc, DND_PROVIDERS]
})
export class AppModule { }
