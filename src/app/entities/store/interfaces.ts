import {ActionCreator} from '@ngrx/store';
import {NotAllowedCheck, TypedAction} from '@ngrx/store/src/models';
import {ErrorPayload} from '@entities/store/payloads';

export type PureObject = {};

export interface ApiActions<
	T1 extends PureObject,
	T2 extends PureObject = PureObject,
	S1 extends string = string,
	S2 extends string = string
> {
	requested: ActionCreator<S2, (props?: T2 & NotAllowedCheck<T2>) => T2 & TypedAction<S2>>;
	succeeded: ActionCreator<S1, (props: T1 & NotAllowedCheck<T1>) => T1 & TypedAction<S1>>;
	failed: ActionCreator<string, (props: ErrorPayload) => ErrorPayload & TypedAction<string>>;
}

export interface Statuses {
	default: LoadingStatus;
	loading: LoadingStatus;
	loaded: LoadingStatus;
	error: (error: any) => LoadingStatus;
}

export type LoadingStatus =
	| {loading: false; loaded: false; error: null}
	| {loading: true; loaded: false; error: null}
	| {loading: false; loaded: true; error: null}
	| {loading: false; loaded: false; error: any};

