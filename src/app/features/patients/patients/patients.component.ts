import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingStatus} from '@entities/store/interfaces';
import {Store} from '@ngrx/store';
import {PatientsActions} from '@store/patients/actions';
import {patientsSelectors} from '@store/patients/selectors';
import {Patient} from '@entities/patients/model';
import {PATIENT_TABLE_COLUMNS, PATIENTS_FILTER_PROP} from '@entities/patients/constants';
import {Order} from '@entities/orders/model';

@Component({
	selector: 'st-patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
	patients$: Observable<Patient[]>;
	loadingStatus$: Observable<LoadingStatus>;
	columns = PATIENT_TABLE_COLUMNS;
	filterProp = PATIENTS_FILTER_PROP;

	constructor(private store: Store) {
		this.reloadData();
		this.patients$ = this.store.select(patientsSelectors.patientsWithFavorite.data)
		this.loadingStatus$ = this.store.select(patientsSelectors.patientsWithFavorite.loadingStatus);
	}

	reloadData(): void {
		this.store.dispatch(PatientsActions.getPatientsWithFavorite());
	}

	toggleFavorite(data: Order): void {
		this.store.dispatch(PatientsActions.toggleFavoritePatient({data}));
	}
}
