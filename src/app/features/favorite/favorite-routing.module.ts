import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FavoriteComponent} from './favorite/favorite.component';

const routes: Routes = [
	{
		path: '',
		component: FavoriteComponent,
		data: {title: 'stms.menu.favorite'}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FavoriteRoutingModule {}
