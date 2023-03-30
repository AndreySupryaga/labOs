import {LoadingStatus} from '@entities/store/interfaces';
import {STATUS} from '@entities/store/constants';
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

export function combineLoadingStatuses(...statuses: LoadingStatus[]): LoadingStatus {
	const statusesLength = statuses.length;
	let handledStatus = null;
	let defaultStatusesNumber = 0;

	for (let i = 0; i < statusesLength; i++) {
		handledStatus = statuses[i];

		if (handledStatus.error) {
			return STATUS.error(handledStatus.error);
		}

		if (handledStatus.loading) {
			return STATUS.loading;
		}

		defaultStatusesNumber += +!handledStatus.loaded;
	}
	if (defaultStatusesNumber === statusesLength) {
		return STATUS.default;
	}
	return defaultStatusesNumber > 0 ? STATUS.loading : STATUS.loaded;
}

export function mapItemsWithFavorite<T, K extends keyof T>(
	data: T[],
	favoriteData: T[],
	prop: K,
): T[] {
	if (!data || !favoriteData) {
		return null;
	}
	const favoriteIds = favoriteData.map((item) => item[prop]);
	return data.map(item => ({
		...item,
		[FAVORITE_FLAG_PROPERTY]: favoriteIds.includes(item[prop])
	}));
}
