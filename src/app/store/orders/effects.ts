import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {OrdersApiService} from '@shared/api/orders/orders.api.service';

@Injectable()
export class OrdersEffects {
	getOrders$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OrdersActions.getOrders.requested),
			switchMap(() =>
				this.apiService.getOrders().pipe(
					map(OrdersActions.getOrders.succeeded),
					catchError((err) => of(OrdersActions.getOrders.failed({error: err})))
				)
			)
		),
	);

	constructor(
		private actions$: Actions,
		private store: Store,
		private apiService: OrdersApiService
	) {}
}
