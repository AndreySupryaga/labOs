import {Action, createReducer, on} from '@ngrx/store';
import {LoadingStatus} from '@entities/store/interfaces';
import {STATUS} from '@entities/store/constants';
import {assoc, pipe} from 'ramda';
import {PatientsActions} from '@store/patients/actions';
import {Patient} from '@entities/patients/model';

export enum PatientsStates {
	Patients = 'Patients',
	PatientsLoadingStatus = 'PatientsLoadingStatus',
	FavoritePatients = 'FavoritePatients',
	FavoritePatientsLoadingStatus = 'FavoritePatientsLoadingStatus',
}

export interface PatientsState {
	[PatientsStates.Patients]: Patient[];
	[PatientsStates.PatientsLoadingStatus]: LoadingStatus;
	[PatientsStates.FavoritePatients]: Patient[];
	[PatientsStates.FavoritePatientsLoadingStatus]: LoadingStatus;
}

export const initialPatientsState: PatientsState = {
	[PatientsStates.Patients]: null,
	[PatientsStates.PatientsLoadingStatus]: STATUS.default,
	[PatientsStates.FavoritePatients]: null,
	[PatientsStates.FavoritePatientsLoadingStatus]: STATUS.default,
};

const reducer = createReducer(
	initialPatientsState,
	on(PatientsActions.getPatients.requested, (state) =>
		pipe(assoc(PatientsStates.PatientsLoadingStatus, STATUS.loading))(state)
	),
	on(PatientsActions.getPatients.succeeded, (state, {data}) => {
		return pipe(
				assoc(PatientsStates.Patients, data),
				assoc(PatientsStates.PatientsLoadingStatus, STATUS.loaded)
			)(state)
		}
	),
	
	on(PatientsActions.getFavoritePatients.requested, (state) =>
		pipe(assoc(PatientsStates.FavoritePatientsLoadingStatus, STATUS.loading))(state)
	),
	on(PatientsActions.getFavoritePatients.succeeded, (state, {data}) => {
			return pipe(
				assoc(PatientsStates.FavoritePatients, data),
				assoc(PatientsStates.FavoritePatientsLoadingStatus, STATUS.loaded)
			)(state)
		}
	),

	on(PatientsActions.updateFavoritePatients, (state, {data}) =>
		pipe(assoc(PatientsStates.FavoritePatients, data))(state)
	),
);

export function patientsReducer(state: PatientsState, action: Action) {
	return reducer(state, action);
}
