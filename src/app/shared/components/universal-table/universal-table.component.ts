import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {TableColumn} from '@entities/universal-table/model';
import {LoadingStatus} from '@entities/store/interfaces';
import {TableProps} from '@entities/universal-table/enums';
import {FormControl} from '@angular/forms';

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

	@Output() clickOnFavorite = new EventEmitter<Row>();

	tableProps = TableProps;
	displayedColumns: string[];
	filterControl = new FormControl('');

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.columns) {
			this.displayedColumns = this.columns.map(({id}) => id);
		}
		if (changes.rows) {
			this.displayedColumns = this.columns.map(({id}) => id);
		}
	}
}
