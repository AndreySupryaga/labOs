import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';

import {OrdersComponent} from './orders/orders.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersStoreFeatureModule} from '@store/orders';

@NgModule({
	declarations: [OrdersComponent],
	imports: [CommonModule, SharedModule, OrdersRoutingModule, OrdersStoreFeatureModule]
})
export class OrdersModule {
}
