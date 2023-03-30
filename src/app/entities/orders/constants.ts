import {TableColumn} from '@entities/universal-table/model';
import {Order} from '@entities/orders/model';
import {TableProps} from '@entities/universal-table/enums';

export const ORDER_TABLE_COLUMNS: TableColumn<Order>[] = [
	{
		id: TableProps.Favorite,
		title: 'stms.orders.favorite',
		width: 1
	},
	{
		id: 'orderName',
		title: 'stms.orders.order-name',
	},
	{
		id: 'creationDate',
		title: 'stms.orders.creation-date',
		formatValue(row: Order): string {
			return `${row[this.id]?.formattedDate} ${row[this.id]?.formattedTime}`;
		}
	},
	{
		id: 'creator',
		title: 'stms.orders.order-creator',
		formatValue(row: Order): string {
			return row[this.id]?.name;
		}
	},
	{
		id: 'patient',
		title: 'stms.orders.order-patient',
		formatValue(row: Order): string {
			return row[this.id]?.fullName;

		}
	},
	{
		id: 'status',
		title: 'stms.orders.order-status',
		formatValue(row: Order): string {
			return row[this.id]?.name;
		}
	},
]

export const FAVORITE_ORDER_STORAGE_KEY = 'favoriteOrders';
