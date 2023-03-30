import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';
import {PatientsState, PatientsStates} from '@store/patients/reducer';
import {combineLoadingStatuses, mapItemsWithFavorite} from '@shared/helpers/store/selectors.helper';
import {PatientProps} from '@entities/patients/enums';

const getState = createFeatureSelector<PatientsState>(StoreModules.Patients);

const getPatientsData = createSelector(getState, (state: PatientsState) => state[PatientsStates.Patients]);
const getPatientsLoadingStatus = createSelector(getState, (state: PatientsState) => state[PatientsStates.PatientsLoadingStatus]);

const getFavoritePatientsData = createSelector(getState, (state: PatientsState) => state[PatientsStates.FavoritePatients]);
const getFavoritePatientsLoadingStatus = createSelector(getState, (state: PatientsState) => state[PatientsStates.FavoritePatientsLoadingStatus]);

const getPatientsWithFavoriteData = createSelector(
	getPatientsData,
	getFavoritePatientsData,
	(data, favoriteData,) => mapItemsWithFavorite(data, favoriteData, PatientProps.DefaultId)
);

const getPatientsWithFavoriteLoadingStatus = createSelector(
	getPatientsLoadingStatus,
	getFavoritePatientsLoadingStatus,
	combineLoadingStatuses
);

export const patientsSelectors = {
	patients: {
		data: getPatientsData,
		loadingStatus: getPatientsLoadingStatus,
	},
	favoritePatients: {
		data: getFavoritePatientsData,
		loadingStatus: getFavoritePatientsLoadingStatus,
	},
	patientsWithFavorite: {
		data: getPatientsWithFavoriteData,
		loadingStatus: getPatientsWithFavoriteLoadingStatus,
	}
};
