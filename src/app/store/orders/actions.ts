import {createAction, props} from '@ngrx/store';
import {getActionDescription, getApiActionsForGivenModule} from '@shared/helpers/store/actions.helper';
import {StoreModules} from '@entities/store/store';
import {OrderApiResponse} from '@entities/orders/order.model';

const moduleName = StoreModules.Orders;

const getApiActions = getApiActionsForGivenModule(moduleName);

export const OrdersActions = {
	getOrders: getApiActions('Get Orders', props<OrderApiResponse>()),
	updateOrders: createAction(getActionDescription(moduleName, 'Update Orders')),
};
