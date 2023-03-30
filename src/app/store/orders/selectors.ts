import {OrdersState, OrdersStates} from '@store/orders/reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';
import {combineLoadingStatuses, mapItemsWithFavorite} from '@shared/helpers/store/selectors.helper';
import {OrderProps} from '@entities/orders/enums';

const getState = createFeatureSelector<OrdersState>(StoreModules.Orders);

const getOrdersData = createSelector(getState, (state: OrdersState) => state[OrdersStates.Orders]);
const getOrdersLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.OrdersLoadingStatus]);

const getFavoriteOrdersData = createSelector(getState, (state: OrdersState) => state[OrdersStates.FavoriteOrders]);
const getFavoriteOrdersLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.FavoriteOrdersLoadingStatus]);

const getOrdersWithFavoriteData = createSelector(
	getOrdersData,
	getFavoriteOrdersData,
	(data, favoriteData,) => mapItemsWithFavorite(data, favoriteData, OrderProps.Identifier)
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
