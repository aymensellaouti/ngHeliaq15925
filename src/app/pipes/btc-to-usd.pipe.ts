import { Pipe, PipeTransform } from '@angular/core';

const BTCUSD = 115377;

@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  /**
   *
   * @param number : la valeur à transforer
   * @param args : Pas d'arguments
   * @returns
   */
  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? BTCUSD * amount : amount / BTCUSD;
  }

}
