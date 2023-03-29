import {createAction, props} from '@ngrx/store';
import {getActionDescription, getApiActionsForGivenModule} from '@shared/helpers/store/actions.helper';
import {StoreModules} from '@entities/store/store';
import {PatientsApiResponse} from '@entities/patients/model';

const moduleName = StoreModules.Patients;

const getApiActions = getApiActionsForGivenModule(moduleName);

export const PatientsActions = {
	getPatients: getApiActions('Get Patients', props<PatientsApiResponse>()),
	updatePatients: createAction(getActionDescription(moduleName, 'Update Patients')),
};
