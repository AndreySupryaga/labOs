import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TableColumn} from '@entities/universal-table/model';
import {LoadingStatus} from '@entities/store/interfaces';

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

	displayedColumns: string[];

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.columns) {
			this.displayedColumns = this.columns.map(({id}) => id);
		}
	}

	toggleFavorite(element: Row): void {

	}
}
