import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../../config/const.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return !path.trim() ? APP_CONST.defaultImage: path;
  }

}
