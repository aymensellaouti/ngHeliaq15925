import { Component, signal } from '@angular/core';
import { HelloComponent } from "../../components/hello/hello.component";

@Component({
  selector: 'app-names',
  imports: [HelloComponent],
  templateUrl: './names.component.html',
  styleUrl: './names.component.css',
})
export class NamesComponent {
  names = signal(['sellaouti', 'lewandowski', 'dupont']);
  reset() {
    this.names.set([]);
  }
}
