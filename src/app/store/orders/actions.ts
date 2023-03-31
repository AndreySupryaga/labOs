import {createAction, props} from '@ngrx/store';
import {getActionDescription, getApiActionsForGivenModule} from '@shared/helpers/store/actions.helper';
import {StoreModules} from '@entities/store/store';
import {Order} from '@entities/orders/model';

const moduleName = StoreModules.Orders;

const getDesc = (desc) => getActionDescription(moduleName, desc);
const getApiActions = getApiActionsForGivenModule(moduleName);

export const OrdersActions = {
	getOrders: getApiActions('Get Orders', props<{data: Order[]}>()),
	getFavoriteOrders: getApiActions('Get Favorite Orders', props<{data: Order[]}>()),
	getOrdersWithFavorite: createAction(getDesc('Get Orders With Favorite')),
	toggleFavoriteOrder: createAction(
		getDesc('Toggle Favorite Orders'),
		props<{data: Order}>()
	),
	removeFromFavoriteOrder: createAction(
		getDesc('Remove Favorite Orders'),
		props<{data: Order}>()
	),
	updateFavoriteOrders: createAction(
		getDesc('Update Favorite Orders'),
		props<{data: Order[]}>()
	),
};
