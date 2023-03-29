import {Action, createReducer, on} from '@ngrx/store';
import {LoadingStatus} from '@entities/store/interfaces';
import {STATUS} from '@entities/store/constants';
import {assoc, pipe} from 'ramda';
import {PatientsActions} from '@store/patients/actions';
import {Patient} from '@entities/patients/model';

export enum PatientsStates {
	Patients = 'Patients',
	PatientsLoadingStatus = 'PatientsLoadingStatus',
}

export interface PatientsState {
	[PatientsStates.Patients]: Patient[];
	[PatientsStates.PatientsLoadingStatus]: LoadingStatus;
}

export const initialPatientsState: PatientsState = {
	[PatientsStates.Patients]: null,
	[PatientsStates.PatientsLoadingStatus]: STATUS.default,
};

const reducer = createReducer(
	initialPatientsState,
	on(PatientsActions.getPatients.requested, (state) =>
		pipe(assoc(PatientsStates.PatientsLoadingStatus, STATUS.loading))(state)
	),
	on(PatientsActions.getPatients.succeeded, (state, {patient}) => {
		return pipe(
				assoc(PatientsStates.Patients, patient),
				assoc(PatientsStates.PatientsLoadingStatus, STATUS.loaded)
			)(state)
		}
	),
);

export function patientsReducer(state: PatientsState, action: Action) {
	return reducer(state, action);
}
