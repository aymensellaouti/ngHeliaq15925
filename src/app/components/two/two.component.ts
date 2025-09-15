import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two',
  imports: [FormsModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  two = 'init value';

  showTwo() {
    console.log("Sending Two");

    return this.two;
  }
}
