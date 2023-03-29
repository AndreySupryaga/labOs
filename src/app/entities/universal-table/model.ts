export interface TableColumn<Row = any> {
	id: string;
	title: string;
	width?: number;
	getValue?: (row: Row) => string;
}
