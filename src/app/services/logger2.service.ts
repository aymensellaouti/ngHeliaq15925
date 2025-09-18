import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class Logger2Service {
  log(message: unknown): void {
    console.log('From Logger2Service');
    console.log(message);
  }
}
