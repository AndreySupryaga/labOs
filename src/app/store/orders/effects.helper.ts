import {Order} from '@entities/orders/model';

export class EffectsHelper {
	static getUpdatedFavoriteOrders(
		order: Order,
		orders: Order[],
		favoriteOrders: Order[]
	): Order[] {
		const isExistInFavoriteList = favoriteOrders
			.some(({identifier}) => identifier === order.identifier);

		if (isExistInFavoriteList) {
			return favoriteOrders
				.filter(({identifier}) => identifier !== order.identifier);
		}

		const orderInList = orders.find(({identifier}) => identifier === order.identifier);

		return [...favoriteOrders, orderInList];
	}
}
