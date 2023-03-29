import {createAction, props} from '@ngrx/store';
import {NotAllowedCheck, ActionCreatorProps} from '@ngrx/store/src/models';
import {ErrorPayload} from '@entities/store/payloads';
import {ApiActions, PureObject} from '@entities/store/interfaces';

export const getActionDescription = (moduleName: string, id: string, description?: string): string =>
	`[${moduleName}] ${id} ${description || ''}`;

export const getApiActionsForGivenModule = (moduleName: string) => <T1 extends PureObject>(
	action = '',
	succeedActionProps?: ActionCreatorProps<T1> & NotAllowedCheck<T1>,
	failedActionProps = props<ErrorPayload>()
): ApiActions<T1> => ({
	requested: createAction(getActionDescription(moduleName, `${action} requested`)),
	succeeded: createAction(getActionDescription(moduleName, `${action} request was succeeded`), succeedActionProps),
	failed: createAction(getActionDescription(moduleName, `${action} request failed`), failedActionProps),
});
