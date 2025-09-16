import { Component, inject } from '@angular/core';
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { CounterComponent } from "./signals/counter/counter.component";
import { SomComponent } from "./signals/som/som.component";
import { TtcComponent } from "./signals/ttc/ttc.component";
import { NamesComponent } from './signals/names/names.component';
import { ShowIsEvenComponent } from "./interactionEntreComposant/show-is-even/show-is-even.component";
import { PereComponent } from "./interactionEntreComposant/pere/pere.component";
import { CvComponent } from "./cv/cv/cv.component";
import { StyleComponent } from "./directives/style/style.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { FormsModule } from '@angular/forms';
import { FirstService } from './services/first.service';
import { TodoComponent } from "./todo/todo/todo.component";
import { WeekTodoComponent } from "./todo/week-todo/week-todo.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ColorComponent,
    DatePipe,
    UpperCasePipe,
    BtcToUsdPipe,
    CurrencyPipe,
    CvComponent,
    TodoComponent,
    WeekTodoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = new Date();
  firstService = inject(FirstService);
  toastrService = inject(ToastrService);
  constructor() // private firstService: FirstService
  {
    this.toastrService.info('Bienvenu chez Heliaq');
  }
  // Que peut on avoir dans une classe

  //Attributs => State (état)
  title = 'ngHeliaq15925';
  src = 'as.jpg';
  //méthodes => comportement

  // test(x: number) {
  //  console.log('Calucl BTS USD From Function');
  //   return x * 115000;
  // }
}
