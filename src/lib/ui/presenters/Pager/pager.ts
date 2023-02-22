export type SlidePage = (
  dir: "all-left" | "all-right" | "inc" | "dec",
  clickedIndex: number,
  className: string | undefined,
  classNames: string | undefined
) => void;

export const Pager = (
  slides: HTMLElement[],
  openClassList: string | [],
  closedClassList: string | [],
  startPosition: "open" | "closed" = "open"
): SlidePage => {
  let appliedClasses: string[];
  // if (className === undefined) classNames = [className];
  // if (classNames !== undefined) appliedClasses = classNames;
  // if nothing is added. assume open. no closed
  // if both assume open
  // if one, assume o

  return (
    dir: "all-left" | "all-right" | "inc" | "dec",
    clickedIndex: number
  ) => {
    let count = clickedIndex;

    switch (dir) {
      case "all-right":
        while (count < slides.length) {
          slides[count].classList.remove(...appliedClasses);
          count++;
        }
        break;
      case "all-left":
        while (count >= 0) {
          slides[count].classList.add(...appliedClasses);
          count--;
        }
        break;
      case "inc":
        slides[count].classList.remove(...appliedClasses);
        count++;
        break;
      case "dec":
        slides[count].classList.add(...appliedClasses);
        count--;
        break;

      default:
        break;
    }
  };
};
