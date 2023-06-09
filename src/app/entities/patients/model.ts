import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

export interface PatientsApiResponse {
	patient: Patient[]
	count: number;
	moreUncountedMatches: boolean;
	undisplayedMatches: boolean;
}

export interface Patient {
	address?: any;
	addressString?: string;
	age?: string;
	ageFull?: string;
	associatedMedications?: any[];
	attachments?: any[];
	availablePriorities?: any[];
	biohazard?: boolean;
	birthDate?: any;
	birthYear?: number;
	chronicDiagnosis?: any[];
	code?: number;
	comments?: any[];
	currentEpisode?: any;
	defaultFormattedId?: string;
	defaultId?: string;
	defaultIdType?: any;
	demogEpisode?: any;
	ethnicity?: any;
	eligibilityState?: any;
	facility?: any;
	firstName?: any;
	followers?: any[];
	fullName?: any;
	hasBillingRecords?: boolean;
	hasBloodBankRecords?: boolean;
	hasOrders?: boolean;
	idMatch?: string;
	ids?: any[];
	idsObject?: {[key: number]: string};
	inactive?: boolean;
	inactiveSince?: any;
	isActive?: any;
	isEligible?: boolean;
	isLinked?: boolean;
	lastName?: string;
	medications?: any[];
	middleName?: string;
	originCountry?: {code?: number; name?: string};
	paymentMethods?: any[];
	paymentMethodsObject?: any;
	physician?: any;
	policyNumbersString?: string;
	recentDiagnosis?: any[];
	relationHistory?: any;
	relatives?: any[];
	room?: string;
	searchedBy?: any;
	selfPay?: any;
	sex?: any;
	shippingAddress?: any;
	type?: any;
	userParameters?: any[];
	headingFields?: any[];
	weight?: string;
	height?: string;
	followUpPatient?: any;
	isHospitalized?: boolean;
	[FAVORITE_FLAG_PROPERTY]?: boolean;
}
