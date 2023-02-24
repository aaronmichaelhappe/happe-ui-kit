// export type SlidePage = (
// 	dir: 'all-left' | 'all-right' | 'inc' | 'dec',
// 	clickedIndex: number,
// ) => void;

export const pager = (
	slides: HTMLElement[],
) => {

	return (dir: 'all-left' | 'all-right' | 'inc' | 'dec', clickedIndex: number) => {
		let index = clickedIndex;
		const affectedElements: any[] = [];
		switch (dir) {
			case 'all-left':
				while (index >= 0) {
					slides[index].classList.remove('closed');
					affectedElements.push(slides[index]);
					index--;

					continue;
				}
				break;
			case 'all-right':
				while (index < slides.length) {
					slides[index].classList.add("closed");
					console.log('slides[index]', slides[index]);

					affectedElements.push(slides[index]);
					index++;

					continue;
				}
				break;
			// case 'inc':

			// 	// index++;
			// 	break;
			// case 'dec':

			// 	// index--;
			// 	break;

			// default:
			// 	break;
		}

		return affectedElements;
	};

};
