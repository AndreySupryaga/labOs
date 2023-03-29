import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';
import {PatientsState, PatientsStates} from '@store/patients/reducer';

const getState = createFeatureSelector<PatientsState>(StoreModules.Patients);

const getPatientsData = createSelector(getState, (state: PatientsState) => state[PatientsStates.Patients]);
const getPatientsLoadingStatus = createSelector(getState, (state: PatientsState) => state[PatientsStates.PatientsLoadingStatus]);

export const patientsSelectors = {
	patients: {
		data: getPatientsData,
		loadingStatus: getPatientsLoadingStatus,
	}
};
