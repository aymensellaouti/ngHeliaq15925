import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';

export const routes: Routes = [
  // cv
  {path: '', component: FirstComponent},
  {
    path: 'cv',
    children: [
      {path: '', component: CvComponent},
      {path: ':id', component: DetailsCvComponent},
    ]
  },
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'color', component: ColorComponent},
  {path: ':quelqueChose/:autreChose', component: SecondComponent},
  {path: '**', component: NF404Component},
];
