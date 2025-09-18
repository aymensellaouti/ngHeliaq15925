import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class Logger3Service {
  log(message: unknown): void {
    console.log('From Logger3Service');
    console.log(message);
  }
}
