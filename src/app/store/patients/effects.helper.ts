import {Order} from '@entities/orders/model';
import {Patient} from '@entities/patients/model';
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

export class EffectsHelper {
	static getUpdatedFavoritePatients(
		patient: Patient,
		favoritePatient: Patient[],
		patients?: Patient[],
	): Order[] {
		const isExistInFavoriteList = favoritePatient
			.some(({defaultId}) => defaultId === patient.defaultId);

		if (isExistInFavoriteList) {
			return favoritePatient
				.filter(({defaultId}) => defaultId !== patient.defaultId);
		}

		if (!patients) {
			return [];
		}

		const newPatient = patients.find(({defaultId}) => defaultId === patient.defaultId);

		return [...favoritePatient, {...newPatient, [FAVORITE_FLAG_PROPERTY]: true}];
	}
}
