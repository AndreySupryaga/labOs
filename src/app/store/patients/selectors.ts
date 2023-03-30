import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreModules} from '@entities/store/store';
import {PatientsState, PatientsStates} from '@store/patients/reducer';
import {combineLoadingStatuses} from '@shared/helpers/store/selectors.helper';

const getState = createFeatureSelector<PatientsState>(StoreModules.Patients);

const getPatientsData = createSelector(getState, (state: PatientsState) => state[PatientsStates.Patients]);
const getPatientsLoadingStatus = createSelector(getState, (state: PatientsState) => state[PatientsStates.PatientsLoadingStatus]);

const getFavoritePatientsData = createSelector(getState, (state: PatientsState) => state[PatientsStates.FavoritePatients]);
const getFavoritePatientsLoadingStatus = createSelector(getState, (state: PatientsState) => state[PatientsStates.FavoritePatientsLoadingStatus]);

const getPatientsWithFavoriteData = createSelector(
	getPatientsData,
	getFavoritePatientsData,
	(orders, favoritePatients) => {
		if (!orders || !favoritePatients) {
			return null;
		}
		const favoriteIds = favoritePatients.map(({defaultId}) => defaultId);
		return orders.map(item => ({
			...item,
			isFavorite: favoriteIds.includes(item.defaultId)
		}));
	}
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
