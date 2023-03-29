import {Action, createReducer, on} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {Order} from '@entities/orders/order.model';
import {LoadingStatus} from '@entities/store/interfaces';
import {STATUS} from '@entities/store/constants';
import {assoc, pipe} from 'ramda';

export enum OrdersStates {
	Orders = 'Orders',
	OrdersLoadingStatus = 'OrdersLoadingStatus',
}

export interface OrdersState {
	[OrdersStates.Orders]: Order[];
	[OrdersStates.OrdersLoadingStatus]: LoadingStatus;
}

export const initialOrdersState: OrdersState = {
	[OrdersStates.Orders]: null,
	[OrdersStates.OrdersLoadingStatus]: STATUS.default,
};

const reducer = createReducer(
	initialOrdersState,
	on(OrdersActions.getOrders.requested, (state) =>
		pipe(assoc(OrdersStates.OrdersLoadingStatus, STATUS.loading))(state)
	),
	on(OrdersActions.getOrders.succeeded, (state, {order}) => {
		console.log(order);
		return pipe(
				assoc(OrdersStates.Orders, order),
				assoc(OrdersStates.OrdersLoadingStatus, STATUS.loaded)
			)(state)
		}
	),
);

export function ordersReducer(state: OrdersState, action: Action) {
	return reducer(state, action);
}
