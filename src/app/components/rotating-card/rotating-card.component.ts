import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  imports: [FormsModule],
  templateUrl: './rotating-card.component.html',
  styleUrl: './rotating-card.component.css',
})
export class RotatingCardComponent {
  // Définir mon state => créer les attributs qui décrivent ma vue
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Formateur';
  path = 'rotating_card_profile3.png';

  showFullName():string {
    console.log("Return fullname");

    return this.firstname + ' ' + this.name;
  }
}
