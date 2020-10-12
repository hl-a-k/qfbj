export const SHOW_STAT = 'SHOW_STAT'


export function showStat(stat) {
  return{
    type:SHOW_STAT,
    stat:stat
  }
}
