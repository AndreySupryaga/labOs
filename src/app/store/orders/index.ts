import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreModules} from '@entities/store/store';
import {ordersReducer} from '@store/orders/reducer';
import {OrdersEffects} from '@store/orders/effects';
import {OrdersApiService} from '@shared/api/orders/add-gender-age.api.service';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature(StoreModules.Orders, ordersReducer),
		EffectsModule.forFeature([OrdersEffects])
	],
	providers: [OrdersApiService]
})
export class OrdersStoreFeatureModule {}
