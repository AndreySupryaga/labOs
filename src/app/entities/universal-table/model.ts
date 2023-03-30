export interface TableColumn<Row = any> {
	id: string;
	title: string;
	width?: number;
	isStatus?: boolean;
	formatValue?: (row: Row) => string;
}
