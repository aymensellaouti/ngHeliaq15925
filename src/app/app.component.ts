import { Component } from '@angular/core';
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent],
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
