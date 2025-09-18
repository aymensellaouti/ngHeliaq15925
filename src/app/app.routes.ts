import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  // cv
  { path: '', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.routing').then((m) => m.CV_ROUTES),
    data: {
      preload: true,
    },
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo/todo.component'),
  },
  {
    path: 'word',
    loadComponent: () =>
      import('./directives/mini-word/mini-word.component').then(
        (m) => m.MiniWordComponent
      ),
  },
  { path: 'color', component: ColorComponent },
  { path: ':quelqueChose/:autreChose', component: SecondComponent },
  { path: '**', component: NF404Component },
];
