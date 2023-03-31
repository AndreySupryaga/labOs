import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {Observable} from 'rxjs';
import {Order} from '@entities/orders/model';
import {orderSelectors} from '@store/orders/selectors';
import {LoadingStatus} from '@entities/store/interfaces';
import {ORDER_TABLE_COLUMNS} from '@entities/orders/constants';
import {OrderProps} from '@entities/orders/enums';

@Component({
	selector: 'st-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
	orders$: Observable<Order[]>;
	loadingStatus$: Observable<LoadingStatus>;
	columns = ORDER_TABLE_COLUMNS;
	filterProp = OrderProps.OrderName;

	constructor(private store: Store) {
		this.reloadData();
		this.orders$ = this.store.select(orderSelectors.ordersWithFavorite.data)
		this.loadingStatus$ = this.store.select(orderSelectors.ordersWithFavorite.loadingStatus);
	}

	reloadData(): void {
		this.store.dispatch(OrdersActions.getOrdersWithFavorite());
	}

	toggleFavorite(data: Order): void {
		this.store.dispatch(OrdersActions.toggleFavoriteOrder({data}));
	}
}
