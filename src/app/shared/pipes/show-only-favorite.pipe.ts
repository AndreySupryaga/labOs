import {Pipe, PipeTransform} from '@angular/core';
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

@Pipe({
	name: 'showOnlyFavorite'
})
export class ShowOnlyFavoritePipe implements PipeTransform {
	transform<T>(items: T[], showFavorite: boolean): T[] {
		if (!items || !showFavorite) {
			return items;
		}
		return items.filter(item => item[FAVORITE_FLAG_PROPERTY]);
	}
}
