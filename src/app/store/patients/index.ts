import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreModules} from '@entities/store/store';
import {PatientsEffects} from '@store/patients/effects';
import {patientsReducer} from '@store/patients/reducer';
import {PatientsApiService} from '@shared/api/patients/patients.api.service';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature(StoreModules.Patients, patientsReducer),
		EffectsModule.forFeature([PatientsEffects])
	],
	providers: [PatientsApiService]
})
export class PatientsStoreFeatureModule {}
