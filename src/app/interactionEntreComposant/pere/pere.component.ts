import { Component } from '@angular/core';
import { FilsComponent } from "../fils/fils.component";

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.component.html',
  styleUrl: './pere.component.css',
})
export class PereComponent {
  alertMessage(message: string) {
    alert("mon fils m'a dit : " + message)
  }
}
