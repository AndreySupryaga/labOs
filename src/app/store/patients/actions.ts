import {createAction, props} from '@ngrx/store';
import {getActionDescription, getApiActionsForGivenModule} from '@shared/helpers/store/actions.helper';
import {StoreModules} from '@entities/store/store';
import {Patient} from '@entities/patients/model';

const moduleName = StoreModules.Patients;

const getDesc = (desc) => getActionDescription(moduleName, desc);
const getApiActions = getApiActionsForGivenModule(moduleName);

export const PatientsActions = {
	getPatients: getApiActions('Get Patients', props<{data: Patient[]}>()),
	getFavoritePatients: getApiActions('Get Favorite Patients', props<{data: Patient[]}>()),
	getPatientsWithFavorite: createAction(getDesc('Get Patients With Favorite')),
	toggleFavoritePatient: createAction(
		getDesc('Toggle Favorite Patients'),
		props<{data: Patient}>()
	),
	removeFromFavoritePatient: createAction(
		getDesc('Remove Favorite Patients'),
		props<{data: Patient}>()
	),
	updateFavoritePatients: createAction(
		getDesc('Update Favorite Patients'),
		props<{data: Patient[]}>()
	),
};
