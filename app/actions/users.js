export const PAGE_SELECT = 'PAGE_SELECT';

export function pageSelect(page) {
  return {
    type: PAGE_SELECT,
    page:page
  };
}
