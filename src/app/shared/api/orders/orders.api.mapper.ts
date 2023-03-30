import {Injectable} from '@angular/core';
import {Order, OrderApiResponse} from '@entities/orders/model';

@Injectable()
export class OrdersApiMapper {
	public static mapData(data: OrderApiResponse): Order[] {
		return data.order
	}
}
