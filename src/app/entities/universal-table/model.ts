export interface TableColumn<Row = any, Id = string> {
	id: Id;
	title: string;
	width?: number;
	isStatus?: boolean;
	isSortable?: boolean;
	formatValue?: (row: Row) => string;
	customSorting?: (a: Row, b: Row, isAsc: boolean, prop: string) => number;
}
