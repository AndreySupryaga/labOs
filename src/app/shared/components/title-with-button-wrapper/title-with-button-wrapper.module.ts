import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleWithButtonWrapperComponent} from '@shared/components/title-with-button-wrapper/title-with-button-wrapper.component';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
	declarations: [TitleWithButtonWrapperComponent],
	exports: [
		TitleWithButtonWrapperComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		TranslateModule
	]
})
export class TitleWithButtonWrapperModule {}
