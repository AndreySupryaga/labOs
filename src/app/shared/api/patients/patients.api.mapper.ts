import {Patient, PatientsApiResponse} from '@entities/patients/model';

export class PatientsApiMapper {
	public static mapData(data: PatientsApiResponse): Patient[] {
		return data.patient
	}
}
