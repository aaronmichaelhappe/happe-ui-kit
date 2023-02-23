import * as Range from 'range-js';

export type SlidePage = (
	dir: 'all-left' | 'all-right' | 'inc' | 'dec',
	clickedIndex: number,
	className: string | undefined,
	classNames: string | undefined
) => void;

// docs
// pass in opened val and closed val  for both
// pass in for just opened val (or keep default) for one
// oass in for just cloased, pass in closed val and empty string for closed val
export const Pager = (
	slides: HTMLElement[],
	openedClassName = 'opened',
	closedClassName = '',
	startPosition: 'open' | 'closed' = 'open'
): SlidePage => {
	const eachStateHasValue = openedClassName === '' || closedClassName === '' ? false : true;

	const addSlideClass = (count: number, className: string) => {
		slides[count].classList.add(className);
	};
	const removeSlideClass = (count: number, className: string) => {
		slides[count].classList.remove(className);
	};

	return (dir: 'all-left' | 'all-right' | 'inc' | 'dec', clickedIndex: number) => {
		let count = clickedIndex;

		switch (dir) {
			case 'all-right':
				while (count < slides.length) {
					if (startPosition === 'open') {
						addSlideClass(count, openedClassName);
						count++;
						continue;
					}
					eachStateHasValue
						? addSlideClass(count, closedClassName)
						: removeSlideClass(count, openedClassName);

					count++;
				}
				break;
			case 'all-left':
				while (count >= 0) {
					slides[count].classList.add(...appliedClasses);
					count--;
				}
				break;
			case 'inc':
				slides[count].classList.remove(...appliedClasses);
				count++;
				break;
			case 'dec':
				slides[count].classList.add(...appliedClasses);
				count--;
				break;

			default:
				break;
		}
	};
};
