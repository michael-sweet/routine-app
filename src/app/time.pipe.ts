import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(inputSeconds: number): string {
    let hours = Math.floor(inputSeconds / (60 * 60));
    let minutes = Math.floor((inputSeconds - (hours * 60 * 60)) / 60);
    let seconds = inputSeconds - ((minutes * 60) + (hours * 60 * 60));

    let pad = function (timeUnit: string): string {
      if (timeUnit.length < 2) {
        return '0' + timeUnit;
      }
      return timeUnit;
    };

    return pad(hours.toString()) + ':' + pad(minutes.toString()) + ':' + pad(seconds.toString());
  }

}
