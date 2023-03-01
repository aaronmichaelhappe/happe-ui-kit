type Page = (dir: 'all-left' | 'all-right' | 'dec' | 'inc', clickedIndex: number) => HTMLElement[];

interface _Pager {
	page: Page;
}

export const Pager = function () {
	let _slides: HTMLElement[];
	const _pager = {
		page(dir: 'all-left' | 'all-right' | 'dec' | 'inc', clickedIndex: number) {
			let index = clickedIndex;
			const updatedSlides: HTMLElement[] = [];

			switch (dir) {
				case 'all-left':
					while (index >= 0) {
						_slides[index].classList.remove('closed');

						updatedSlides.push(_slides[index]);

						index--;

						continue;
					}
					break;
				case 'all-right':
					while (index < _slides.length) {
						_slides[index].classList.add("closed");

						updatedSlides.push(_slides[index]);

						index++;

						continue;
					}
					break;

				case 'dec':
					if (index < 0) break;

					_slides[index].classList.remove("closed");

					updatedSlides.push(_slides[index]);

					index++;

					break;

				case 'inc':
					if (index >= _slides.length - 1) break;

					_slides[index].classList.add("closed");

					updatedSlides.push(_slides[index]);

					index++;

					break;

				default:
					break;
			}

			return updatedSlides;
		},
	};

	const create = function (slides: HTMLElement[]): _Pager {
		_slides = slides;
		return Object.create(_pager);
	};

	return {
		create,
	};
};


