import { Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  // Todo : Update Code with
  readonly #embauchees = signal<Cv[]>([]);

  /**
   *
   * Retourne la liste des embauchees
   *
   * @returns CV[]
   *
   */
  getEmbauchees(): Signal<Cv[]> {
    return this.#embauchees.asReadonly();
  }

  /**
   *
   * Embauche une personne si elle ne l'est pas encore
   * Sinon il retourne false
   *
   * @param cv : Cv
   * @returns boolean
   */
  embauche(cv: Cv): boolean {
    if (this.#embauchees().indexOf(cv) == -1) {
      this.#embauchees.update((embauchees) => [...embauchees, cv]);
      return true;
    }
    return false;
  }
}
