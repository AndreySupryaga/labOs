import {TableColumn} from '@entities/universal-table/model';
import {Patient} from '@entities/patients/model';
import {TableHeaderIds} from '@entities/universal-table/enums';
import {PatientGender} from '@entities/patients/enums';

export const PATIENT_TABLE_COLUMNS: TableColumn<Patient>[] = [
	{
		id: TableHeaderIds.Favorite,
		title: 'stms.patients.favorite',
		width: 1
	},
	{
		id: 'fullName',
		title: 'stms.patients.name',
	},
	{
		id: 'birthDate',
		title: 'stms.patients.age',
		formatValue(row: Patient): string {
			if (!row[this.id]?.formattedDate) {
				return '';
			}
			const dob = new Date(row[this.id]?.formattedDate).getTime();
			const dateToCompare = new Date().getTime();
			const age = (dateToCompare - dob) / (365 * 24 * 60 * 60 * 1000);
			return `${Math.floor(age)}`;
		}
	},
	{
		id: 'sex',
		title: 'stms.patients.gender',
		formatValue(row: Patient): string {
			return row[this.id]?.name === PatientGender.Male ? `♂ ${row[this.id]?.name}` : `♀ ${row[this.id]?.name}`;
		}
	},
	{
		id: 'address',
		title: 'stms.patients.phone',
		formatValue(row: Patient): string {
			return row[this.id]?.phone1;
		}
	},
	{
		id: 'defaultId',
		title: 'stms.patients.id',
	},
]

export const FAVORITE_PATIENTS_STORAGE_KEY = 'favoritePatients';
export const PATIENTS_FILTER_PROP = 'fullName';
