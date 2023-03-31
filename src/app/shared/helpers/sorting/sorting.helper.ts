export function defaultSorting<Row>(a: Row, b: Row, isAsc: boolean, prop?: string): number {
	let aVal, bVal;
	if (!prop) {
		[aVal, bVal] = [a !== undefined ? String(a).toLowerCase() : '', b !== undefined ? String(b).toLowerCase() : '']
	} else {
		[aVal, bVal] = [a[prop] !== undefined ? String(a[prop]).toLowerCase() : '', b[prop] !== undefined ? String(b[prop]).toLowerCase() : ''];
	}
	return sortComparator(aVal || '', bVal || '', isAsc);
}

export function defaultNumberSorting<Row>(a: Row, b: Row, isAsc: boolean, prop?: string): number {
	let aVal, bVal;
	if (!prop) {
		[aVal, bVal] = [a !== undefined ? +a : 0, b !== undefined ? +b : 0]
	} else {
		[aVal, bVal] = [a[prop] !== undefined ? +a[prop] : 0, b[prop] !== undefined ? +b[prop] : 0]
	}
	return sortComparator(aVal || 0, bVal || 0, isAsc);
}

function sortComparator(aVal, bVal, isAsc): number {
	return aVal === bVal ? 0 : (aVal < bVal ? -1 : 1) * (isAsc ? 1 : -1);
}
