import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import {TableColumn} from '@entities/universal-table/model';
import {LoadingStatus} from '@entities/store/interfaces';
import {SortDimensions, TableHeaderIds} from '@entities/universal-table/enums';
import {FormControl} from '@angular/forms';
import {FAVORITE_FLAG_PROPERTY} from '@entities/universal-table/constants';
import {MatSort, Sort} from '@angular/material/sort';
import {defaultSorting} from '@shared/helpers/sorting/sorting.helper';
import {clone} from 'ramda'

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

	@ViewChild(MatSort) sort: MatSort;

	sortedRows: Row[];
	tableHeaderIds = TableHeaderIds;
	favoriteFlagProperty = FAVORITE_FLAG_PROPERTY;
	displayedColumns: string[];
	filterControl = new FormControl('');
	favoriteCheckboxControl = new FormControl(false);

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.columns) {
			this.displayedColumns = this.columns.map(({id}) => id);
		}

		if (changes.rows && this.rows) {
			this.initSortedRows();
		}
	}

	initSortedRows(): void {
		this.sortedRows = clone(this.rows);
	}

	sortChange(sort: Sort): void {
		if (!sort.direction) {
			this.initSortedRows();
		}
		const isAsc = sort.direction === SortDimensions.Asc;
		const currentCol = this.columns.find(({id}) => id === sort.active);
		const currentSorting = currentCol.customSorting ? currentCol.customSorting.bind(currentCol) : defaultSorting;
		this.sortedRows = clone(this.rows).sort((a, b) => currentSorting(a, b, isAsc, sort.active));
	}
}
