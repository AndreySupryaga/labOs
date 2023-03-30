import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';

import {SharedModule} from '@shared/shared.module';

import {FavoriteComponent} from './favorite.component';

describe('FavoriteComponent', () => {
	let component: FavoriteComponent;
	let fixture: ComponentFixture<FavoriteComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				imports: [
					SharedModule,
					NoopAnimationsModule,
					TranslateModule.forRoot()
				],
				declarations: [FavoriteComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(FavoriteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
