import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderApiResponse} from '@entities/orders/model';

@Injectable()
export class OrdersApiService {
	constructor(private http: HttpClient) {}

	getOrders(): Observable<OrderApiResponse> {
		return this.http.get<OrderApiResponse>('https://api.mocki.io/v2/79fb05cb');
	}
}
