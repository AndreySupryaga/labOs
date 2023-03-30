import {Action, createReducer, on} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {Order} from '@entities/orders/model';
import {LoadingStatus} from '@entities/store/interfaces';
import {STATUS} from '@entities/store/constants';
import {assoc, pipe} from 'ramda';

export enum OrdersStates {
	Orders = 'Orders',
	OrdersLoadingStatus = 'OrdersLoadingStatus',
	OrdersFavorite = 'OrdersFavorite',
	OrdersFavoriteLoadingStatus = 'OrdersFavoriteLoadingStatus',
}

export interface OrdersState {
	[OrdersStates.Orders]: Order[];
	[OrdersStates.OrdersLoadingStatus]: LoadingStatus;
	[OrdersStates.OrdersFavorite]: Order[];
	[OrdersStates.OrdersFavoriteLoadingStatus]: LoadingStatus;
}

export const initialOrdersState: OrdersState = {
	[OrdersStates.Orders]: null,
	[OrdersStates.OrdersLoadingStatus]: STATUS.default,
	[OrdersStates.OrdersFavorite]: null,
	[OrdersStates.OrdersFavoriteLoadingStatus]: STATUS.default,
};

const reducer = createReducer(
	initialOrdersState,
	on(OrdersActions.getOrders.requested, (state) =>
		pipe(assoc(OrdersStates.OrdersLoadingStatus, STATUS.loading))(state)
	),
	on(OrdersActions.getOrders.succeeded, (state, {data}) => {
		return pipe(
				assoc(OrdersStates.Orders, data),
				assoc(OrdersStates.OrdersLoadingStatus, STATUS.loaded)
			)(state)
		}
	),
	on(OrdersActions.getFavoriteOrders.requested, (state) =>
		pipe(assoc(OrdersStates.OrdersFavoriteLoadingStatus, STATUS.loading))(state)
	),
	on(OrdersActions.getFavoriteOrders.succeeded, (state, {data}) => {
		return pipe(
				assoc(OrdersStates.OrdersFavorite, data),
				assoc(OrdersStates.OrdersFavoriteLoadingStatus, STATUS.loaded)
			)(state)
		}
	),
);

export function ordersReducer(state: OrdersState, action: Action) {
	return reducer(state, action);
}
