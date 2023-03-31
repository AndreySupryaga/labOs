import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, concatMapTo, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {OrdersApiService} from '@shared/api/orders/orders.api.service';
import {Order} from '@entities/orders/model';
import {orderSelectors} from '@store/orders/selectors';
import {EffectsHelper} from '@shared/helpers/store/effects.helper';
import {OrderProps} from '@entities/orders/enums';

@Injectable()
export class OrdersEffects {
	getOrdersWithFavorite$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OrdersActions.getOrdersWithFavorite),
			concatMapTo([
				OrdersActions.getOrders.requested(),
				OrdersActions.getFavoriteOrders.requested(),
			])
		),
	);

	getOrders$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OrdersActions.getOrders.requested),
			switchMap(() =>
				this.apiService.getOrders().pipe(
					map((data: Order[]) => OrdersActions.getOrders.succeeded({data})),
					catchError((err) => of(OrdersActions.getOrders.failed({error: err})))
				)
			)
		),
	);

	getFavoriteOrders$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OrdersActions.getFavoriteOrders.requested),
			switchMap(() =>
				this.apiService.getFavoriteOrders().pipe(
					map((data: Order[]) => OrdersActions.getFavoriteOrders.succeeded({data})),
					catchError((err) => of(OrdersActions.getFavoriteOrders.failed({error: err})))
				)
			)
		),
	);

	toggleFavoriteOrder$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OrdersActions.toggleFavoriteOrder),
			withLatestFrom(
				this.store.select(orderSelectors.orders.data),
				this.store.select(orderSelectors.favoriteOrders.data)
			),
			concatMap(([{data}, orders, favoriteOrders]: [{data: Order}, Order[], Order[]]) => {
					const updatedFavoriteOrders = EffectsHelper.getUpdatedFavoriteList(data, favoriteOrders, OrderProps.Identifier, orders);
					return this.apiService.updateFavoriteOrders(updatedFavoriteOrders).pipe(
						map((data: Order[]) => OrdersActions.updateFavoriteOrders({data}))
					)
				}
			)
		),
	);

	removeFromFavoriteOrder$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OrdersActions.removeFromFavoriteOrder),
			withLatestFrom(this.store.select(orderSelectors.favoriteOrders.data)),
			concatMap(([{data}, favoriteOrders]: [{data: Order}, Order[]]) => {
					const updatedFavoriteOrders = EffectsHelper.getUpdatedFavoriteList(data, favoriteOrders, OrderProps.Identifier);
					return this.apiService.updateFavoriteOrders(updatedFavoriteOrders).pipe(
						map((data: Order[]) => OrdersActions.updateFavoriteOrders({data}))
					)
				}
			)
		),
	);

	constructor(
		private actions$: Actions,
		private store: Store,
		private apiService: OrdersApiService
	) {}
}
