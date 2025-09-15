import { Component } from '@angular/core';
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { RotatingCardComponent } from "./components/rotating-card/rotating-card.component";
import { CounterComponent } from "./signals/counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent, ColorComponent, TwoComponent, RotatingCardComponent, CounterComponent],
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
