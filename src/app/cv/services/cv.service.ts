import {  computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { AuthService } from '../../auth/services/auth.service';
import { APP_CONST } from '../../config/const.config';


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
  http = inject(HttpClient);
  authService = inject(AuthService);
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Signal<Cv[]> {
    return this.cvs.asReadonly();
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  addCv(cv: Partial<Cv>): Observable<Cv> {
    return this.http.post<Cv>(APP_API.cv, cv);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  deleteCvById(id: number): Observable<Cv> {
    return this.http.delete<Cv>(APP_API.cv + id);
  }

  /**
   * Recherche les cvs dont le name contient la chaine name passée en paramètre
   * @param name : string
   * @returns cvs Cv[]
   */
  selectByName(name: string) {
    const search = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', search);
    return this.http.get<any>(APP_API.cv, { params });
  }
  /**
   * Recherche les cvs dont la valeur est égale à la chaine passée en paramètre
   * @param property : string, la propriété sur laquelle on va requeter
   * @param value : string, la valeur de la propriété sur laquelle on va requeter
   * @returns cvs Cv[]
   */
  selectByProperty(property: string, value: string) {
    const search = `{"where":{"${property}":"${value}"}}`;
    const params = new HttpParams().set('filter', search);
    return this.http.get<Cv[]>(APP_API.cv, { params });
  }

  /**
   * Séelectionne un cv par son id
   * @param id
   * @returns
   */
  findFakeCvById(id: number): Cv | null {
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
