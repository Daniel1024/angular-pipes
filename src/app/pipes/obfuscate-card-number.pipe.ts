import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfuscateCardNumber'
})
export class ObfuscateCardNumberPipe implements PipeTransform {

  transform(value: string): string {
    const regex = /(\d+)/g;

    if (value == undefined || value.match(regex) == null) {
      return '- Sin informar -';
    }

    const numberCard = value.match(regex).join(''),
      last4Number = numberCard.substr(numberCard.length - 4);

    return `•••• •••• •••• ${last4Number}`;
  }

}
