import {Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Order} from '@entities/orders/model';
import {TableColumn} from '@entities/universal-table/model';
import {LoadingStatus} from '@entities/store/interfaces';

@Component({
  selector: 'st-universal-table',
  templateUrl: './universal-table.component.html',
  styleUrls: ['./universal-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversalTableComponent implements OnChanges {
  @Input() rows: Order[];
  @Input() columns: TableColumn[];
  @Input() loadingStatus: LoadingStatus;

  displayedColumns: string[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns) {
      this.displayedColumns = this.columns.map(({id}) => id);
    }
  }
}
