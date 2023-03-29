export interface TableColumn<Row = any> {
	id: string;
	title: string;
	width?: number;
	formatValue?: (row: Row) => string;
}
