import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.component.html',
  styleUrl: './som.component.css',
})
export class SomComponent {
  x = signal(3);
  y = signal(5);
  z = computed(() => this.x() + this.y());
  plusGrandQue40 = computed(() => {
    console.log('plusGrandQue 40 :D');
    return this.z() > 40 ;
  });

  show = computed(() => {
    console.log('show plus Grand Que 40');

    if (this.plusGrandQue40()) {
      return 'plus grand';
    } else {
      return 'plus petit';
    }
  })
  doubleZ = computed(() => {
    console.log('doubleZ :D');
    return this.z() * 2;
  });
}
