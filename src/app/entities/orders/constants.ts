import {TableColumn} from '@entities/universal-table/model';

export const ORDER_TABLE_COLUMNS: TableColumn[] = [
	{
		id: 'favorite',
		title: 'stms.orders.favorite',
		width: 1
	},
	{
		id: 'orderName',
		title: 'stms.orders.order-name'
	},
	{
		id: 'creationDate',
		title: 'stms.orders.creation-date'
	},
	{
		id: 'creator',
		title: 'stms.orders.order-creator'
	},
	{
		id: 'patient',
		title: 'stms.orders.order-patient'
	},
	{
		id: 'status',
		title: 'stms.orders.order-status'
	},
]
