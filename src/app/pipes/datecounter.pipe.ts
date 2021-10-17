import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecounter'
})
export class DatecounterPipe implements PipeTransform {

  transform(entry: any): string {
    let timeElapsed: string = "";
    let currentDate: any = new Date();
    var dateDifference = Math.abs(entry - currentDate) / 1000;
    
    var NoOfDays = Math.floor(dateDifference / 86400);
    if(NoOfDays > 0){
      timeElapsed += Math.floor(NoOfDays) +" days ";
    }

    dateDifference -= NoOfDays * 86400;

    var NoOfHours = Math.floor(dateDifference / 3600) % 24;
    if(NoOfHours > 0){
      timeElapsed += Math.floor(NoOfHours)+" hrs ";
    }

    dateDifference -= NoOfHours * 3600;

    var NoOfMinutes = Math.floor(dateDifference / 60) % 60;
    if(NoOfMinutes > 0){
      timeElapsed += Math.floor(NoOfMinutes)+" mins ";
    }

    dateDifference -= NoOfMinutes * 60;

    var NoOfSeconds = dateDifference % 60;
    if(NoOfSeconds > 0){
      timeElapsed += Math.floor(NoOfSeconds)+" secs ";
    }
    return timeElapsed;
  }

}
