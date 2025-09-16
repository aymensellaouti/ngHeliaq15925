import { Component, computed, input, Input, OnChanges, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-is-even',
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css',
})
export class IsEvenComponent  {
  // @Input({
  //   required: true,
  // })
  value = input.required<number>();
  message = computed(
    () => this.value() + (this.value() % 2 ? 'est impaire' : 'est paire')
  );
  // // get message() {
  // //   return this.value + (this.value % 2 ? 'est impaire' : 'est paire');
  // // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['value']) {
  //     this.message =
  //       changes['value'].currentValue + (this.value % 2 ? 'est impaire' : 'est paire');
  //   }
  // }
}
