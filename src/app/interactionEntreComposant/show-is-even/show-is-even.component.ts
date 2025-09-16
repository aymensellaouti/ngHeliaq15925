import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsEvenComponent } from "../is-even/is-even.component";

@Component({
  selector: 'app-show-is-even',
  imports: [FormsModule, IsEvenComponent],
  templateUrl: './show-is-even.component.html',
  styleUrl: './show-is-even.component.css'
})
export class ShowIsEvenComponent {
  value = 0;
}
