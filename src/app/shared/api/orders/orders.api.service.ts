import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Order, OrderApiResponse} from '@entities/orders/model';
import {LocalStorageService} from '@core/local-storage/local-storage.service';
import {FAVORITE_ORDER_STORAGE_KEY} from '@entities/orders/constants';
import {OrdersApiMapper} from './orders.api.mapper';
import {delay, map} from 'rxjs/operators';

@Injectable()
export class OrdersApiService {
	constructor(
		private http: HttpClient,
		private localStorageService: LocalStorageService,
	) {}

	getOrders(): Observable<Order[]> {
		return this.http.get<OrderApiResponse>('https://api.mocki.io/v2/79fb05cb')
			.pipe(map(OrdersApiMapper.mapData));
	}

	getFavoriteOrders(): Observable<Order[]> {
		const orders = this.localStorageService.getItem(FAVORITE_ORDER_STORAGE_KEY) ?? [];
		console.log(orders);
		return of(orders).pipe(delay(3000));
	}

	updateFavoriteOrders(data: Order[]): Observable<Order[]> {
		this.localStorageService.setItem(FAVORITE_ORDER_STORAGE_KEY, data);
		console.log(data);
		return of(data).pipe(delay(3000));
	}
}
