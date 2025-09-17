import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  imports: [AsyncPipe],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css'
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  compteur = 5;
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    this.myObservable$.subscribe({
      next: (val) => {
       this.compteur = val;
      },
    });
    // setTimeout(() => {
      this.myObservable$
      // 5 4 3 2 1
      .pipe(
        map(valeur => valeur * 3),
        // 15 12 9 6 3
        filter(data => data % 2 == 0)
        // 12 6
      )
      .subscribe({
        next: (val) => {
          this.toastr.info('' + val)
        },
        complete: () => {
          this.toastr.error('BOOOM !!!')
        }
      });
    // },3000)
  }
}


