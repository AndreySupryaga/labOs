import {OrdersState, OrdersStates} from '@store/orders/reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';

const getState = createFeatureSelector<OrdersState>(StoreModules.Orders);

const getOrdersData = createSelector(getState, (state: OrdersState) => state[OrdersStates.Orders]);
const getOrdersLoadingStatus = createSelector(getState, (state: OrdersState) => state[OrdersStates.OrdersLoadingStatus]);

export const orderSelectors = {
	orders: {
		data: getOrdersData,
		loadingStatus: getOrdersLoadingStatus,
	}
};
