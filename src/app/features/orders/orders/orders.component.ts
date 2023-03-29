import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {Observable} from 'rxjs';
import {Order} from '@entities/orders/order.model';
import {orderSelectors} from '@store/orders/selectors';
import {LoadingStatus} from '@entities/store/interfaces';

@Component({
	selector: 'st-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
	orders$: Observable<Order[]>;
	loadingStatus$: Observable<LoadingStatus>;

	constructor(private store: Store) {
		this.orders$ = this.store.select(orderSelectors.orders.data)
		this.loadingStatus$ = this.store.select(orderSelectors.orders.loadingStatus);
	}

	ngOnInit() {
		this.store.dispatch(OrdersActions.getOrders.requested());
	}
}
