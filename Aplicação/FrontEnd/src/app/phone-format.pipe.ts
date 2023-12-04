import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Verifica se o valor é nulo ou vazio
    if (!value) {
      return '';
    }

    // Remove caracteres não numéricos
    const cleanedNumber = value.replace(/\D/g, '');

    // Formatação para (XX) XXXXX-XXXX
    const formattedNumber = `(${cleanedNumber.substr(0, 2)}) ${cleanedNumber.substr(2, 5)}-${cleanedNumber.substr(7)}`;

    return formattedNumber;
  }
}
