import {createAction, props} from '@ngrx/store';
import {getActionDescription, getApiActionsForGivenModule} from '@shared/helpers/store/actions.helper';
import {StoreModules} from '@entities/store/store';
import {Order} from '@entities/orders/model';

const moduleName = StoreModules.Orders;

const getApiActions = getApiActionsForGivenModule(moduleName);

export const OrdersActions = {
	getOrders: getApiActions('Get Orders', props<{data: Order[]}>()),
	getFavoriteOrders: getApiActions('Get Favorite Orders', props<{data: Order[]}>()),
	getOrdersWithFavorite: createAction(getActionDescription(moduleName, 'Get Orders With Favorite')),
	toggleFavoriteOrder: createAction(
		getActionDescription(moduleName, 'Toggle Favorite Orders'),
		props<{data: Order}>()
	),
	updateFavoriteOrders: createAction(
		getActionDescription(moduleName, 'Update Favorite Orders'),
		props<{data: Order[]}>()
	),
};
