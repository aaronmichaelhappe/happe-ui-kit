export const GridGallery = function () {
  let _gridEl: HTMLElement,
    _gridLayoutPieces: NodeList[],
    _gridDataItems: any;

  const _gridlayout = {
    generateGrid() {
    }
  };

  const create = function (gridEl: HTMLElement, gridDataItems: any[]) {
    _gridEl = gridEl;
    _gridLayoutPieces = <any>gridEl.children;
    _gridLayoutPieces = [].slice.call(_gridLayoutPieces);
    _gridLayoutPieces = _gridLayoutPieces;
    _gridDataItems = gridDataItems;

    return Object.create(_gridlayout);
  };

  return {
    create
  };
};

