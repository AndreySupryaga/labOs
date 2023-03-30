import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMapTo, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {OrdersApiService} from '@shared/api/orders/orders.api.service';
import {Order} from '@entities/orders/model';

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

	//
	// toggleFavoriteOrder$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(OrdersActions.toggleFavoriteOrder),
	// 		switchMap(() =>
	// 			this.apiService.getOrders().pipe(
	// 				map(OrdersActions.getOrders.succeeded),
	// 				catchError((err) => of(OrdersActions.getOrders.failed({error: err})))
	// 			)
	// 		)
	// 	),
	// );

	constructor(
		private actions$: Actions,
		private store: Store,
		private apiService: OrdersApiService
	) {}
}
