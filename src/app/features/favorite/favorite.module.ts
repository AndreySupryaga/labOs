import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import {FavoriteComponent} from './favorite/favorite.component';
import {FavoriteRoutingModule} from './favorite-routing.module';
import {OrdersStoreFeatureModule} from '@store/orders';
import {UniversalTableModule} from '@shared/components/universal-table/universal-table.module';
import {PatientsStoreFeatureModule} from '@store/patients';
import {TitleWithButtonWrapperModule} from '@shared/components/title-with-button-wrapper/title-with-button-wrapper.module';

@NgModule({
	declarations: [FavoriteComponent],
	imports: [
		CommonModule,
		SharedModule,
		FavoriteRoutingModule,
		OrdersStoreFeatureModule,
		PatientsStoreFeatureModule,
		UniversalTableModule,
		TitleWithButtonWrapperModule
	]
})
export class FavoriteModule {}
