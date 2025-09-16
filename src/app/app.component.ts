import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [NamesComponent, ShowIsEvenComponent, PereComponent, CvComponent, StyleComponent, MiniWordComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // Que peut on avoir dans une classe

  //Attributs => State (état)
  title = 'ngHeliaq15925';
  src = 'as.jpg';
  //méthodes => comportement

  test() {}
}
