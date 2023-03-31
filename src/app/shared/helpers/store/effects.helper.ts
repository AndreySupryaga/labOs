
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

export class EffectsHelper {
	static getUpdatedFavoriteList<T, K extends keyof T>(
		listItem: T,
		favoriteList: T[],
		idProp: K,
		list?: T[],
	): T[] {
		const isExistInFavoriteList = favoriteList
			.some((el) => el[idProp] === listItem[idProp]);

		if (isExistInFavoriteList) {
			return favoriteList
				.filter((el) => el[idProp] !== listItem[idProp]);
		}

		if (!list) {
			return [];
		}

		const newItem = list.find((el) => el[idProp] === listItem[idProp]);

		return [...favoriteList, {...newItem, [FAVORITE_FLAG_PROPERTY]: true}];
	}
}
