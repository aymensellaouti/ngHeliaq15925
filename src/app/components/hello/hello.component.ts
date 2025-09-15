import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  @Input({
    alias: 'nom',
    required: true,
    transform: (value: string) => {
      return 'Antoine';
    },
  })
  name = 'sellaouti';
  @Input()
  firstname = 'aymen'
}
