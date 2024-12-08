import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
      case "home": {
        return 'home'
        break;
      }
      default:{
        return 'help'
        break
      }

    }

  }

}
