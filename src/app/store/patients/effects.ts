import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {PatientsActions} from '@store/patients/actions';
import {PatientsApiService} from '@shared/api/patients/patients.api.service';

@Injectable()
export class PatientsEffects {
	getPatients$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PatientsActions.getPatients.requested),
			switchMap(() =>
				this.apiService.getPatients().pipe(
					map(PatientsActions.getPatients.succeeded),
					catchError((err) => of(PatientsActions.getPatients.failed({error: err})))
				)
			)
		),
	);

	constructor(
		private actions$: Actions,
		private store: Store,
		private apiService: PatientsApiService
	) {}
}
