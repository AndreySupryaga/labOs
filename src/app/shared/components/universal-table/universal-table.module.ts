import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniversalTableComponent} from '@shared/components/universal-table/universal-table.component';
import {MatTableModule} from '@angular/material/table';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {LoaderModule} from '@shared/components/loader/loader.module';

@NgModule({
	declarations: [UniversalTableComponent],
	exports: [
		UniversalTableComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
		TranslateModule,
		MatIconModule,
		LoaderModule
	]
})
export class UniversalTableModule {
}
