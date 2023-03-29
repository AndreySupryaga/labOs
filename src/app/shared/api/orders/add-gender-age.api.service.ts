import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrdersApiService {
	constructor(private http: HttpClient) {}

	getOrders(): Observable<any> {
		return this.http.get('https://api.mocki.io/v2/79fb05cb');
	}
}
