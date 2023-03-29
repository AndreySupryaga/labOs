import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PatientsApiResponse} from '@entities/patients/model';

@Injectable()
export class PatientsApiService {
	constructor(private http: HttpClient) {}

	getPatients(): Observable<PatientsApiResponse> {
		return this.http.get<PatientsApiResponse>('https://api.mocki.io/v2/51597ef3');
	}
}
