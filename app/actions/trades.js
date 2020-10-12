export const PAGE_SELECT = 'PAGE_SELECT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export function pageSelect(rows,count,page) {
  return {
    type: PAGE_SELECT,
    rows:rows,
    count:count,
    page:page
  };
}

export function toggleModal() {
  return{
    type:TOGGLE_MODAL
  }

}
