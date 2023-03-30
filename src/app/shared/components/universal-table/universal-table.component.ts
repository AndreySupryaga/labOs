import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {TableColumn} from '@entities/universal-table/model';
import {LoadingStatus} from '@entities/store/interfaces';
import {TableHeaderIds} from '@entities/universal-table/enums';
import {FormControl} from '@angular/forms';
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';

@Component({
	selector: 'st-universal-table',
	templateUrl: './universal-table.component.html',
	styleUrls: ['./universal-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversalTableComponent<Row> implements OnChanges {
	@Input() rows: Row[];
	@Input() columns: TableColumn[];
	@Input() loadingStatus: LoadingStatus;
	@Input() filterProp: string;
	@Input() showFavoriteCheckbox = true;

	@Output() clickOnFavorite = new EventEmitter<Row>();

	tableHeaderIds = TableHeaderIds;
	favoriteFlagProperty = FAVORITE_FLAG_PROPERTY;
	displayedColumns: string[];
	filterControl = new FormControl('');
	favoriteCheckboxControl = new FormControl(false);

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.columns) {
			this.displayedColumns = this.columns.map(({id}) => id);
		}
		if (changes.rows) {
			this.displayedColumns = this.columns.map(({id}) => id);
		}
	}
}
