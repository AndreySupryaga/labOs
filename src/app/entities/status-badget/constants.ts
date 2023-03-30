import {Statuses, StatusStyleClassNames} from '@entities/status-badget/enums';

export const STATUS_STYLE_CLASS: Record<Statuses, StatusStyleClassNames> = {
	[Statuses.Pending]: StatusStyleClassNames.Pending,
	[Statuses.Progress]: StatusStyleClassNames.Progress,
	[Statuses.Completed]: StatusStyleClassNames.Completed,
}
