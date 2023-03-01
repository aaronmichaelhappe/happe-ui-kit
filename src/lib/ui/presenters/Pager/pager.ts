type PagedAction = 'all-left' | 'all-right' | 'dec' | 'inc';

interface Page<Type> {
	(dir: PagedAction, clickedIndex: number): Type;
}

interface _Pager<Type> {
	page: Page<Type>;
}

interface WillOpen<Type> { (item: Type): void; };
interface WillClose<Type> { (item: Type): void; };

interface OnPaged<Type> {
	willOpen: WillOpen<Type> | null;
	willClose: WillClose<Type> | null;
}

export const Pager = function () {
	let _items: unknown[];
	let willOpen: WillOpen<unknown> | null = null;
	let willClose: WillClose<unknown> | null = null;

	const _pager = {
		page(dir: PagedAction, clickedIndex: number) {
			let index = clickedIndex;
			const updatedItems: any[] = [];

			switch (dir) {
				case 'all-left':
					while (index >= 0) {

						if (willOpen !== null) willOpen(_items[index]);

						updatedItems.push(_items[index]);

						index--;

						continue;
					}
					break;
				case 'all-right':
					while (index < _items.length) {

						if (willClose !== null) willClose(_items[index]);

						updatedItems.push(_items[index]);

						index++;

						continue;
					}
					break;

				case 'dec':
					if (index < 0) break;

					if (willOpen !== null) willOpen(_items[index]);

					updatedItems.push(_items[index]);

					index++;

					break;

				case 'inc':
					if (index >= _items.length - 1) break;

					if (willClose !== null) willClose(_items[index]);

					updatedItems.push(_items[index]);

					index++;

					break;

				default:
					break;
			}

			return updatedItems;
		},
	};

	const create = function <Type>(items: unknown[], cbs: OnPaged<unknown>): _Pager<Type> {

		_items = items;
		willOpen = cbs.willOpen;
		willClose = cbs.willClose;

		return Object.create(_pager);
	};

	return {
		create,
	};
};


