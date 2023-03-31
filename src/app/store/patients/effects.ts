import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, concatMapTo, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {PatientsActions} from '@store/patients/actions';
import {PatientsApiService} from '@shared/api/patients/patients.api.service';
import {Patient} from '@entities/patients/model';
import {patientsSelectors} from '@store/patients/selectors';
import {EffectsHelper} from '@shared/helpers/store/effects.helper';
import {PatientProps} from '@entities/patients/enums';

@Injectable()
export class PatientsEffects {
	getPatientsWithFavorite$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PatientsActions.getPatientsWithFavorite),
			concatMapTo([
				PatientsActions.getPatients.requested(),
				PatientsActions.getFavoritePatients.requested(),
			])
		),
	);

	getPatients$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PatientsActions.getPatients.requested),
			switchMap(() =>
				this.apiService.getPatients().pipe(
					map((data: Patient[]) => PatientsActions.getPatients.succeeded({data})),
					catchError((err) => of(PatientsActions.getPatients.failed({error: err})))
				)
			)
		),
	);

	getFavoritePatients$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PatientsActions.getFavoritePatients.requested),
			switchMap(() =>
				this.apiService.getFavoritePatients().pipe(
					map((data: Patient[]) => PatientsActions.getFavoritePatients.succeeded({data})),
					catchError((err) => of(PatientsActions.getFavoritePatients.failed({error: err})))
				)
			)
		),
	);

	toggleFavoritePatient$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PatientsActions.removeFromFavoritePatient),
			withLatestFrom(this.store.select(patientsSelectors.favoritePatients.data)),
			concatMap(([{data}, favoritePatients]: [{data: Patient}, Patient[]]) => {
					const updatedFavoritePatients = EffectsHelper.getUpdatedFavoriteList(data, favoritePatients, PatientProps.DefaultId);
					return this.apiService.updateFavoritePatients(updatedFavoritePatients).pipe(
						map((data: Patient[]) => PatientsActions.updateFavoritePatients({data}))
					)
				}
			)
		),
	);

	removeFromFavoritePatient$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PatientsActions.toggleFavoritePatient),
			withLatestFrom(
				this.store.select(patientsSelectors.patients.data),
				this.store.select(patientsSelectors.favoritePatients.data)
			),
			concatMap(([{data}, patients, favoritePatients]: [{data: Patient}, Patient[], Patient[]]) => {
					const updatedFavoritePatients = EffectsHelper.getUpdatedFavoriteList(data, favoritePatients, PatientProps.DefaultId, patients);
					return this.apiService.updateFavoritePatients(updatedFavoritePatients).pipe(
						map((data: Patient[]) => PatientsActions.updateFavoritePatients({data}))
					)
				}
			)
		),
	);

	constructor(
		private actions$: Actions,
		private store: Store,
		private apiService: PatientsApiService
	) {}
}
