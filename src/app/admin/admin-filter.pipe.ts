import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
  name: 'sushirollFilter'
})


export class AdminFilterPipe implements PipeTransform {
  transform(sushirolls: Item[], searchTerm: string): Item[] {
    if(!sushirolls || !searchTerm) 
    {
    return sushirolls;
    }

return sushirolls.filter( sushirolls => 
     sushirolls.name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  
}
