import {Statuses} from '@entities/store/interfaces';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong';

export const STATUS: Statuses = {
	default: {loading: false, loaded: false, error: null},
	loading: {loading: true, loaded: false, error: null},
	loaded: {loading: false, loaded: true, error: null},
	error: (error: any) => ({loading: false, loaded: false, error: error || DEFAULT_ERROR_MESSAGE}),
};
