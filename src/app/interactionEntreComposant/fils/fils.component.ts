import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
  message = "cc papa";
  //@Output() sendMessageToDad = new EventEmitter<string>();
  sendMessageToDad = output<string>();
  sendMessage() {
    this.sendMessageToDad.emit(this.message)
  }
}
