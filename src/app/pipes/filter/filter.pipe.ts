import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const filterResult = [];
    for (const character of value ) {
      if (
          character.first_name.toLowerCase().indexOf(arg.toLowerCase()) !== -1
          ||
          character.last_name.toLowerCase().indexOf(arg.toLowerCase()) !== -1
         ) {
        filterResult.push(character);
      }
    }
    return filterResult;
  }

}
