export interface TableColumn<Row = any> {
	id: string;
	title: string;
	width?: number;
	isStatus?: boolean;
	isSortable?: boolean;
	formatValue?: (row: Row) => string;
	customSorting?: (a: Row, b: Row, isAsc: boolean, prop: string) => number;
}
