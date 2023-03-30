import {OrdersState, OrdersStates} from '@store/orders/reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';
import {combineLoadingStatuses} from '@shared/helpers/store/selectors.helper';

const getState = createFeatureSelector<OrdersState>(StoreModules.Orders);

const getOrdersData = createSelector(getState, (state: OrdersState) => state[OrdersStates.Orders]);
const getOrdersLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.OrdersLoadingStatus]);

const getFavoriteOrdersData = createSelector(getState, (state: OrdersState) => state[OrdersStates.FavoriteOrders]);
const getFavoriteOrdersLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.FavoriteOrdersLoadingStatus]);

const getOrdersWithFavoriteData = createSelector(
	getOrdersData,
	getFavoriteOrdersData,
	(orders, favoriteOrders) => {
		if (!orders || !favoriteOrders) {
			return null;
		}
		const favoriteIds = favoriteOrders.map(({identifier}) => identifier);
		return orders.map(item => ({
			...item,
			isFavorite: favoriteIds.includes(item.identifier)
		}));
	}
);
const getOrdersWithFavoriteLoadingStatus = createSelector(
	getOrdersLoadingStatus,
	getFavoriteOrdersLoadingStatus,
	combineLoadingStatuses
);
export const orderSelectors = {
	orders: {
		data: getOrdersData,
		loadingStatus: getOrdersLoadingStatus,
	},
	favoriteOrders: {
		data: getFavoriteOrdersData,
		loadingStatus: getFavoriteOrdersLoadingStatus,
	},
	ordersWithFavorite: {
		data: getOrdersWithFavoriteData,
		loadingStatus: getOrdersWithFavoriteLoadingStatus,
	}
};
