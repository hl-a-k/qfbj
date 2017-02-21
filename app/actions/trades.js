export const PAGE_SELECT = 'PAGE_SELECT';
export const TRADES_INIT = 'TRADES_INIT'

export function pageSelect(rows,count,page) {
  return {
    type: PAGE_SELECT,
    rows:rows,
    count:count,
    page:page
  };
}
