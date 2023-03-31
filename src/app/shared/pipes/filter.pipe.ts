import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform<T>(items: T[], filter: string, prop: string): T[] {
		if (!items || !filter || !prop) {
			return items;
		}
		return items.filter(item => item[prop].toLowerCase().includes(filter.toLowerCase()));
	}
}
