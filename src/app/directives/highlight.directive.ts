import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() in = 'yellow';
  @Input() out = 'red';
  // Je suis une directive d'attribut du coup je peux :
  // 1-changer l'apparence de l'element sur lequel je suis
  @HostBinding('style.backgroundColor')
  bgc = this.out;
  constructor() {
    console.log('appHighlight');
  }
  ngOnInit(): void {
    this.bgc = this.out;
  }
  // 2-changer aussi son comportement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}
