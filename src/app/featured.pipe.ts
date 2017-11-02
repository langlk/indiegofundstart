import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(input, filter) {
    if (input === null) {
      return [];
    }
    if (filter.toLowerCase() === "featured") {
      var output = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].featured) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
