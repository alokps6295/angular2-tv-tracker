import {Pipe, PipeTransform} from 'angular2/core';
import * as get from 'lodash.get/index';

@Pipe({
  name: 'orderBy'
})
export class OrderBy implements PipeTransform {

  transform(input: Object[], [field, desc = false]: [string, boolean]): Object[] {
    if (input && field) {
      return Array.from(input).sort((a, b) => {
        if (get(a, field) < get(b, field)) {
          return desc ? 1 : -1;
        }
        if (get(a, field) > get(b, field)) {
          return desc ? -1 : 1;
        }
        return 0;
      });
    }
    return input;
  }

}