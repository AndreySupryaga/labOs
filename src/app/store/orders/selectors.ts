import {OrdersState, OrdersStates} from '@store/orders/reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';
import {combineLoadingStatuses} from '@shared/helpers/store/selectors.helper';

const getState = createFeatureSelector<OrdersState>(StoreModules.Orders);

const getOrdersData = createSelector(getState, (state: OrdersState) => state[OrdersStates.Orders]);
const getOrdersLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.OrdersLoadingStatus]);

const getOrdersFavoriteData = createSelector(getState, (state: OrdersState) => state[OrdersStates.OrdersFavorite]);
const getOrdersFavoriteLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.OrdersFavoriteLoadingStatus]);

const getOrdersWithFavoriteData = createSelector(
	getOrdersData,
	getOrdersFavoriteData,
	(orders, ordersFavorite) => {
		return orders;
	}
);
const getOrdersWithFavoriteLoadingStatus = createSelector(
	getOrdersLoadingStatus,
	getOrdersFavoriteLoadingStatus,
	combineLoadingStatuses
);
export const orderSelectors = {
	orders: {
		data: getOrdersData,
		loadingStatus: getOrdersLoadingStatus,
	},
	ordersFavorite: {
		data: getOrdersFavoriteData,
		loadingStatus: getOrdersFavoriteLoadingStatus,
	},
	ordersWithFavorite: {
		data: getOrdersWithFavoriteData,
		loadingStatus: getOrdersWithFavoriteLoadingStatus,
	}
};
