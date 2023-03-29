import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingStatus} from '@entities/store/interfaces';
import {Store} from '@ngrx/store';
import {PatientsActions} from '@store/patients/actions';
import {patientsSelectors} from '@store/patients/selectors';
import {Patient} from '@entities/patients/model';
import {PATIENT_TABLE_COLUMNS} from '@entities/patients/constants';

@Component({
	selector: 'st-patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
	patients$: Observable<Patient[]>;
	loadingStatus$: Observable<LoadingStatus>;
	columns = PATIENT_TABLE_COLUMNS;

	constructor(private store: Store) {
		this.patients$ = this.store.select(patientsSelectors.patients.data)
		this.loadingStatus$ = this.store.select(patientsSelectors.patients.loadingStatus);
	}

	ngOnInit(): void {
		this.reloadData()
	}

	reloadData(): void {
		this.store.dispatch(PatientsActions.getPatients.requested());
	}
}
