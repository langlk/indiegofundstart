import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input, categoryType) {
    if (input === null) {
      return [];
    }
    if (categoryType === "All") {
      return input;
    } else {
      var output = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === categoryType) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
