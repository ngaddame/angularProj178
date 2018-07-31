import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rating'})
export class RatingPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    let res = [];
    for (let i = 0; i < 5; i++) {
        if(Number(value)<=5)
        {
            res.push({
                id:i,
                checked:true
            });
        }
        else{
            res.push({
                id:i,
                checked:false
            });
        }
      }
      return res;
  }
}