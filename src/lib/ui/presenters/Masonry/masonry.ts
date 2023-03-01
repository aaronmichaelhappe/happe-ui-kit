export interface MasonaryItems {
  [key: string]: unknown;
};

export const MasonryInteractiveOverlay = function () {
  let _gridEl,
    _gridItems: NodeList[],
    _rowWidth: number,
    _totalWidth: number,
    _numberOfRows: number,
    _itemsPerRow: number;

  const _masonry = {
    attach() {
      // let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;
      let index = 0;
      let pointer = 0;
      let layoutAdjustedItems: unknown[] = [];
      const loop = () => {
        // _gridItems[index].
      };
    }
  };

  const create = function (gridEl: HTMLElement, masonaryItems: any[], sizeOpts: Map<string, string[]>) {
    _gridEl = gridEl;
    _gridItems = <any>gridEl.children;
    _gridItems = [].slice.call(_gridItems);
    _gridItems = _gridItems;
    _rowWidth = gridEl.offsetWidth;
    _totalWidth = _gridItems[0].offsetWidth * _gridItems.length;
    _numberOfRows = _totalWidth / _rowWidth;
    _itemsPerRow = _gridItems.length / _numberOfRows;

    return Object.create(_masonry);
  };
  return {
    create
  };
};

