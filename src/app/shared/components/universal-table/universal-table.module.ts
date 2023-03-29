import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniversalTableComponent} from '@shared/components/universal-table/universal-table.component';
import {MatTableModule} from '@angular/material/table';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [UniversalTableComponent],
	exports: [
		UniversalTableComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
		TranslateModule,
		MatIconModule
	]
})
export class UniversalTableModule {
}
