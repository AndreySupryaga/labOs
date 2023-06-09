import {TableColumn} from '@entities/universal-table/model';
import {Order} from '@entities/orders/model';
import moment from 'moment';
import {defaultSorting} from '@shared/helpers/sorting/sorting.helper';
import {FULL_DATE_FORMAT} from '@entities/time/constants';
import {OrderProps} from '@entities/orders/enums';

export const ORDER_TABLE_COLUMNS: TableColumn<Order, OrderProps>[] = [
	{
		id: OrderProps.Favorite,
		title: 'stms.orders.favorite',
		width: 1
	},
	{
		id: OrderProps.OrderName,
		title: 'stms.orders.order-name',
		isSortable: true,
	},
	{
		id: OrderProps.CreationDate,
		title: 'stms.orders.creation-date',
		isSortable: true,
		formatValue(row: Order): string {
			return `${row[this.id]?.formattedDate} ${row[this.id]?.formattedTime}`;
		},
		customSorting(a: Order, b: Order, isAsc): number {
			return moment(this.formatValue(a), FULL_DATE_FORMAT).diff(moment(this.formatValue(b), FULL_DATE_FORMAT)) * (isAsc ? 1 : -1);
		}
	},
	{
		id: OrderProps.Creator,
		title: 'stms.orders.order-creator',
		isSortable: true,
		formatValue(row: Order): string {
			return row[this.id]?.name;
		},
		customSorting(a: Order, b: Order, isAsc): number {
			return defaultSorting(this.formatValue(a), this.formatValue(b), isAsc);
		}
	},
	{
		id: OrderProps.Patient,
		title: 'stms.orders.order-patient',
		isSortable: true,
		formatValue(row: Order): string {
			return row[this.id]?.fullName;
		},
		customSorting(a: Order, b: Order, isAsc): number {
			return defaultSorting(this.formatValue(a), this.formatValue(b), isAsc);
		}
	},
	{
		id: OrderProps.Status,
		title: 'stms.orders.order-status',
		isSortable: true,
		isStatus: true,
		customSorting(a: Order, b: Order, isAsc): number {
			return defaultSorting(a.status.name, b.status.name, isAsc);
		}
	},
]

export const FAVORITE_ORDER_STORAGE_KEY = 'favoriteOrders';
