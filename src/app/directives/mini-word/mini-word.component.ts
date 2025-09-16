import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule]
})
export class MiniWordComponent {
  color = signal('black');
  fontFamily = signal('garamond');
  fontSize = signal(75);
}
