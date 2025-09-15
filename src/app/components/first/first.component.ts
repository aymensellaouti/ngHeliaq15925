import { Component } from '@angular/core';
import { SecondComponent } from "../second/second.component";

@Component({
  selector: 'app-first',
  imports: [SecondComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  name = 'emmanuel';
  isHidden = false;
  message = '';
  constructor() {
    // setTimeout(
    //   () => {
    //     this.name = 'Emilie'
    //   },
    //   2000
    // )
    // setInterval(
    //   () =>
    //   2000
    // )
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
