export function defaultSorting<Row>(a: Row, b: Row, isAsc: boolean, prop?: string): number {
	if (!prop) {
		const aValue = a !== undefined ? String(a).toLowerCase() : '';
		const bValue = b !== undefined ? String(b).toLowerCase() : '';
		return (aValue < bValue ? -1 : 1) * (isAsc ? 1 : -1);
	}
	const aValue = a[prop] !== undefined ? String(a[prop]).toLowerCase() : '';
	const bValue = b[prop] !== undefined ? String(b[prop]).toLowerCase() : '';
	return (aValue < bValue ? -1 : 1) * (isAsc ? 1 : -1);
}
