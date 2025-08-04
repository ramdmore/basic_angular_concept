import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: false
})
export class CapitalizePipe implements PipeTransform {

  transform(value : string): string {
    if(!value)  return 'not found any data';
    let result = value.split(" ").map(ele=> ele.charAt(0).toUpperCase() + ele.slice(1)).join(" ");
     return result;
  }

}
