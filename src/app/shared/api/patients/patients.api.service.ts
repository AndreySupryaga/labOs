import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Patient, PatientsApiResponse} from '@entities/patients/model';
import {delay, map} from 'rxjs/operators';
import {LocalStorageService} from '@core/local-storage/local-storage.service';
import {FAVORITE_PATIENTS_STORAGE_KEY} from '@entities/patients/constants';
import {PatientsApiMapper} from '@shared/api/patients/patients.api.mapper';

@Injectable()
export class PatientsApiService {
	constructor(
		private http: HttpClient,
		private localStorageService: LocalStorageService,
	) {}

	getPatients(): Observable<Patient[]> {
		return this.http.get<PatientsApiResponse>('https://api.mocki.io/v2/51597ef3')
			.pipe(map(PatientsApiMapper.mapData));
		
	}

	getFavoritePatients(): Observable<Patient[]> {
		const orders = this.localStorageService.getItem(FAVORITE_PATIENTS_STORAGE_KEY) ?? [];
		// TODO: Emulate api delay
		return of(orders).pipe(delay(2000));
	}

	updateFavoritePatients(data: Patient[]): Observable<Patient[]> {
		this.localStorageService.setItem(FAVORITE_PATIENTS_STORAGE_KEY, data);
		return of(data);
	}
}
