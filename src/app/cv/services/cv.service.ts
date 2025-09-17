import {  computed, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  protected readonly cvs = signal<Cv[]>([
    new Cv(1, 'aymen', 'sellaouti', 43, 'enseignant', '12345678', ''),
    new Cv(2, 'emilie', 'robert', 20, 'Dév', '12345678', '            '),
    new Cv(
      3,
      'laurant',
      'dubos',
      20,
      'Dév',
      '12345678',
      'rotating_card_profile2.png'
    ),
  ]);
  // Une source de vérité unique
  #selectedCv = signal<Cv | null>(null);
  //selectedCv = computed(() => this.#selectedCv());
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    return this.cvs.asReadonly();
  }

  /**
   * Séelectionne un cv par son id
   * @param id
   * @returns
   */
  findCvById(id: number): Cv | null {
    return this.cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   * Supprime un cv
   * @param cv
   * @returns
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs().indexOf(cv);
    if (index > -1) {
      this.cvs.update((cvs) => cvs.filter((element) => element !== cv));
      return true;
    }
    return false;
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
