import {Order, OrderApiResponse} from '@entities/orders/model';

export class OrdersApiMapper {
	public static mapData(data: OrderApiResponse): Order[] {
		return data.order
	}
}
