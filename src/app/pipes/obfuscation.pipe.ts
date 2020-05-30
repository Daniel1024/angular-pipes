import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obfuscation'
})
export class ObfuscationPipe implements PipeTransform {

  emailArray: string[] = ['email', 'correo'];
  phoneArray: string[] = ['phone', 'celular', 'telefono', 'teléfono'];
  dniArray: string[] = ['dni'];

  transform(element: any): any {

    if (element != null) {

      if (this.emailArray.some((substring) => element.key.toLowerCase().includes(substring))) {

        const email = element.value;
        const separatedEmail = email.split('@');
        const emailName = separatedEmail[0];
        const length = emailName.length;
        const amountToObfuscate = Math.floor(length * 0.70);
        let obfuscatedCharacters = '';
        for (let i = 0; i < amountToObfuscate; i += 1) {
          obfuscatedCharacters += '•';
        }
        const amountToShow = length - amountToObfuscate;
        const amountLastPartToShow = Math.floor(amountToShow / 2);
        let amountFirstPartToShow = amountLastPartToShow;
        if ((amountToShow % 2) === 1) {
          amountFirstPartToShow += 1;
        }
        const emailNameFirstPart = emailName.substring(0, amountFirstPartToShow);
        let obfuscatedEmail = `${emailNameFirstPart}${obfuscatedCharacters}`;
        if (amountLastPartToShow !== 0) {
          obfuscatedEmail = `${obfuscatedEmail}${emailName.substring(length - amountLastPartToShow, length)}`;
        }
        return `${obfuscatedEmail}@${separatedEmail[1]}`;
      } else if (this.phoneArray.some((substring) => element.key.toLowerCase().includes(substring))) {

        const phone = element.value;
        const length = phone.length;
        const amountToObfuscate = Math.floor(length * 0.80);
        const amountToShow = length - amountToObfuscate;
        let phoneObfuscated = '';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < amountToObfuscate; i += 1) {
          phoneObfuscated += '·';
        }
        return `${phoneObfuscated}${phone.substring(length - amountToShow, length)}`;
      } else if (this.dniArray.some((substring) => element.key.toLowerCase().includes(substring))) {

        const dataToObfuscate = element.value;
        const length = dataToObfuscate.length;
        const amountToObfuscate = Math.floor(length * 0.80);
        let obfuscatedCharacters = '';
        for (let i = 0; i < amountToObfuscate; i += 1) {
          obfuscatedCharacters += '·';
        }
        const amountToShow = length - amountToObfuscate;
        const amountLastPartToShow = Math.floor(amountToShow / 2);
        let amountFirstPartToShow = amountLastPartToShow;
        if ((amountToShow % 2) === 1) {
          amountFirstPartToShow += 1;
        }
        const dataObfuscateFirstPart = dataToObfuscate.substring(0, amountFirstPartToShow);
        let obfuscatedData = `${dataObfuscateFirstPart}${obfuscatedCharacters}`;
        if (amountLastPartToShow !== 0) {
          obfuscatedData = `${obfuscatedData}${dataToObfuscate.substring(length - amountLastPartToShow, length)}`;
        }
        return `${obfuscatedData}`;
      }

      return element.value;
    }

  }

}
