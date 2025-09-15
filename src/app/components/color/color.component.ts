import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  // état du composant
  private defaultColor = 'red';
  color = this.defaultColor;

  //comportement
  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
