import {createAction, props} from '@ngrx/store';
import {getActionDescription, getApiActionsForGivenModule} from '@shared/helpers/store/actions.helper';
import {StoreModules} from '@entities/store/store';
import {Patient} from '@entities/patients/model';

const moduleName = StoreModules.Patients;

const getApiActions = getApiActionsForGivenModule(moduleName);

export const PatientsActions = {
	getPatients: getApiActions('Get Patients', props<{data: Patient[]}>()),
	getFavoritePatients: getApiActions('Get Favorite Patients', props<{data: Patient[]}>()),
	getPatientsWithFavorite: createAction(getActionDescription(moduleName, 'Get Patients With Favorite')),
	toggleFavoritePatient: createAction(
		getActionDescription(moduleName, 'Toggle Favorite Patients'),
		props<{data: Patient}>()
	),
	updateFavoritePatients: createAction(
		getActionDescription(moduleName, 'Update Favorite Patients'),
		props<{data: Patient[]}>()
	),
};
