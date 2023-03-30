import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {Observable} from 'rxjs';
import {Order} from '@entities/orders/model';
import {orderSelectors} from '@store/orders/selectors';
import {LoadingStatus} from '@entities/store/interfaces';
import {ORDER_TABLE_COLUMNS} from '@entities/orders/constants';

@Component({
	selector: 'st-favorite',
	templateUrl: './favorite.component.html',
	styleUrls: ['./favorite.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent implements OnInit {
	orders$: Observable<Order[]>;
	loadingStatus$: Observable<LoadingStatus>;
	columns = ORDER_TABLE_COLUMNS;

	constructor(private store: Store) {
		this.orders$ = this.store.select(orderSelectors.orders.data)
		this.loadingStatus$ = this.store.select(orderSelectors.orders.loadingStatus);
	}

	ngOnInit(): void {
		this.reloadData()
	}

	reloadData(): void {
		this.store.dispatch(OrdersActions.getOrders.requested());
	}
}