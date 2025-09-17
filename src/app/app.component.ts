import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstService } from './services/first.service';
import { ToastrService } from 'ngx-toastr';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
    NavbarComponent
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
