import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import {FavoriteComponent} from './favorite/favorite.component';
import {FavoriteRoutingModule} from './favorite-routing.module';
import {OrdersStoreFeatureModule} from '@store/orders';
import {UniversalTableModule} from '@shared/components/universal-table/universal-table.module';
import {LoaderModule} from '@shared/components/loader/loader.module';

@NgModule({
	declarations: [FavoriteComponent],
	imports: [
		CommonModule,
		SharedModule,
		FavoriteRoutingModule,
		OrdersStoreFeatureModule,
		UniversalTableModule,
		LoaderModule
	]
})
export class FavoriteModule {}
