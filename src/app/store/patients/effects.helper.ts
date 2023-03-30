import {Order} from '@entities/orders/model';
import {Patient} from '@entities/patients/model';

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

		return [...favoritePatient, {...newPatient, isFavorite: true}];
	}
}
