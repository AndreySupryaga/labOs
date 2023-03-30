import {FilterPipe} from '@shared/pipes/filter.pipe';
import {NgModule} from '@angular/core';

@NgModule({
	declarations: [FilterPipe],
	exports: [FilterPipe]
})
export class PipesModule {}
