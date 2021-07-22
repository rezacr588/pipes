import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnit: string): any {
    if (!value) return null
    switch (targetUnit) {
      case "km":
        return value * 1.60934
      case "m":
        return value * 1.60934 * 1000
      case "cm":
        return value * 1.60934 * 1000 * 1000
      default:
        throw new Error('Target unit not supported')
    }
  }

}
