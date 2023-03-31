import {TableColumn} from '@entities/universal-table/model';
import {Patient} from '@entities/patients/model';
import {PatientGender, PatientProps} from '@entities/patients/enums';
import moment from 'moment';
import {DATE_FORMAT} from '@entities/time/constants';
import {defaultNumberSorting, defaultSorting} from '@shared/helpers/sorting/sorting.helper';

export const PATIENT_TABLE_COLUMNS: TableColumn<Patient, PatientProps>[] = [
	{
		id: PatientProps.Favorite,
		title: 'stms.patients.favorite',
		width: 1
	},
	{
		id: PatientProps.FullName,
		title: 'stms.patients.name',
		isSortable: true,
	},
	{
		id: PatientProps.BirthDate,
		title: 'stms.patients.age',
		isSortable: true,
		formatValue(row: Patient): string {
			const date = row[this.id]?.formattedDate;
			return date ? `${moment().diff(moment(date, DATE_FORMAT), 'years')}` : '';
		},
		customSorting(a: Patient, b: Patient, isAsc): number {
			return defaultNumberSorting(this.formatValue(a), this.formatValue(b), isAsc);
		}
	},
	{
		id: PatientProps.Sex,
		title: 'stms.patients.gender',
		isSortable: true,
		formatValue(row: Patient): string {
			return `${GENDER_PREFIX[row[this.id]?.name]} ${row[this.id]?.name}`
		},
		customSorting(a: Patient, b: Patient, isAsc): number {
			return defaultSorting(a.sex?.name, b.sex?.name, isAsc);
		}
	},
	{
		id: PatientProps.Address,
		title: 'stms.patients.phone',
		isSortable: true,
		formatValue(row: Patient): string {
			return row[this.id]?.phone1;
		},
		customSorting(a: Patient, b: Patient, isAsc): number {
			return defaultSorting(this.formatValue(a), this.formatValue(b), isAsc);
		}
	},
	{
		id: PatientProps.DefaultId,
		title: 'stms.patients.id',
		isSortable: true,
	},
]

export const GENDER_PREFIX: Record<PatientGender, string> = {
	[PatientGender.Male]: '♂',
	[PatientGender.Female]: '♀',
	[PatientGender.Unknown]: '',
}

export const FAVORITE_PATIENTS_STORAGE_KEY = 'favoritePatients';
