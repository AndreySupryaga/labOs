import {FilterPipe} from '@shared/pipes/filter.pipe';
import {NgModule} from '@angular/core';
import {ShowOnlyFavoritePipe} from '@shared/pipes/show-only-favorite.pipe';

@NgModule({
	declarations: [FilterPipe, ShowOnlyFavoritePipe],
	exports: [FilterPipe, ShowOnlyFavoritePipe]
})
export class PipesModule {}
