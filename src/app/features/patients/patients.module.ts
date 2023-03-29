import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsComponent} from './patients/patients.component';
import {UniversalTableModule} from '@shared/components/universal-table/universal-table.module';
import {LoaderModule} from '@shared/components/loader/loader.module';
import {PatientsStoreFeatureModule} from '@store/patients';

@NgModule({
	declarations: [PatientsComponent],
	imports: [
		CommonModule,
		SharedModule,
		PatientsRoutingModule,
		UniversalTableModule,
		LoaderModule,
		PatientsStoreFeatureModule
	],
	providers: []
})
export class PatientsModule {
}
