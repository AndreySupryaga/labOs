import {Injectable} from '@angular/core';
import {Patient, PatientsApiResponse} from '@entities/patients/model';

@Injectable()
export class PatientsApiMapper {
	public static mapData(data: PatientsApiResponse): Patient[] {
		return data.patient
	}
}
