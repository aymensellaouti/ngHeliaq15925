import { Directive, HostBinding, HostListener } from '@angular/core';
// je veux t'appliquer sur les input texte qui ont un attribut AppRainbow
@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Je suis une directive d'attribut du coup je peux :
  // 1-changer l'apparence de l'element sur lequel je suis
  @HostBinding('style.color')
  color = 'black';
  @HostBinding('style.borderColor')
  borderColor = 'black';
  constructor() {
    console.log('Rainbow');
  }
  // 2-changer aussi son comportement
  @HostListener('keyup')
  onKeyUp() {
    this.color = this.borderColor = this.getRandomColor();
  }
  private getRandomColor() {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }
}
