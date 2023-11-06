import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], searchTerm: string): any[] {
    if (!list || !searchTerm) {
      return list; // retorna a lista original se não houver termo de pesquisa
    }
    searchTerm = searchTerm.toLowerCase(); // converte o termo de pesquisa para minúsculas
    return list.filter(item => {
      // verifica se algum valor do item contém o termo de pesquisa
      return Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm)
      );
    });
  }

}