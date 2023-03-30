import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrdersActions} from '@store/orders/actions';
import {Observable} from 'rxjs';
import {Order} from '@entities/orders/model';
import {orderSelectors} from '@store/orders/selectors';
import {LoadingStatus} from '@entities/store/interfaces';
import {ORDER_FILTER_PROP, ORDER_TABLE_COLUMNS} from '@entities/orders/constants';
import {Patient} from '@entities/patients/model';
import {PatientsActions} from '@store/patients/actions';
import {patientsSelectors} from '@store/patients/selectors';
import {PATIENT_TABLE_COLUMNS, PATIENTS_FILTER_PROP} from '@entities/patients/constants';

@Component({
	selector: 'st-favorite',
	templateUrl: './favorite.component.html',
	styleUrls: ['./favorite.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent {
	orders$: Observable<Order[]>;
	ordersLoadingStatus$: Observable<LoadingStatus>;
	patients$: Observable<Order[]>;
	patientsLoadingStatus$: Observable<LoadingStatus>;

	orderColumns = ORDER_TABLE_COLUMNS;
	patientColumns = PATIENT_TABLE_COLUMNS;
	orderFilterProp = ORDER_FILTER_PROP;
	patientFilterProp = PATIENTS_FILTER_PROP;

	constructor(private store: Store) {
		this.orders$ = this.store.select(orderSelectors.favoriteOrders.data)
		this.ordersLoadingStatus$ = this.store.select(orderSelectors.favoriteOrders.loadingStatus);
		this.patients$ = this.store.select(patientsSelectors.favoritePatients.data)
		this.patientsLoadingStatus$ = this.store.select(patientsSelectors.favoritePatients.loadingStatus);

		this.reloadOrderData();
		this.reloadPatientData();
	}

	reloadOrderData(): void {
		this.store.dispatch(OrdersActions.getFavoriteOrders.requested());
	}

	removeFromFavoriteOrder(data: Order): void {
		this.store.dispatch(OrdersActions.removeFromFavoriteOrder({data}));
	}

	reloadPatientData(): void {
		this.store.dispatch(PatientsActions.getFavoritePatients.requested());
	}

	removeFromFavoritePatient(data: Patient): void {
		this.store.dispatch(PatientsActions.removeFromFavoritePatient({data}));
	}
}
