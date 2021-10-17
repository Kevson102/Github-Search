import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecounter'
})
export class DatecounterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
