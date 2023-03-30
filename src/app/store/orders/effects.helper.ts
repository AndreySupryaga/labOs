import {Order} from '@entities/orders/model';
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

export class EffectsHelper {
	static getUpdatedFavoriteOrders(
		order: Order,
		favoriteOrders: Order[],
		orders?: Order[],
	): Order[] {
		const isExistInFavoriteList = favoriteOrders
			.some(({identifier}) => identifier === order.identifier);

		if (isExistInFavoriteList) {
			return favoriteOrders
				.filter(({identifier}) => identifier !== order.identifier);
		}

		if (!orders) {
			return [];
		}

		const newOrder = orders.find(({identifier}) => identifier === order.identifier);

		return [...favoriteOrders, {...newOrder, [FAVORITE_FLAG_PROPERTY]: true}];
	}
}
