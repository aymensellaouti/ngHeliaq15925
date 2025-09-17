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
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
