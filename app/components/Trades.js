// @flow
import React from 'react';
import { Table,Pagination } from 'elemental'

const Trades = ({rows, currentPage, onPageSelect, pageSize, count, limit}) => {
console.log(rows)
  return (<div>
    <Table>
      <colgroup>
        <col width="10%"/>
        <col width="10%"/>
        <col width="10%"/>
        <col width=""/>
        <col width="30%"/>
      </colgroup>
      <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox"/>
          </label>
        </th>
        <th>用户</th>
        <th>金额</th>
        <th>备注</th>
        <th>日期</th>
      </tr>
      </thead>
      <tbody>
      {rows.map(d=><tr  key={d.id}>
        <td>
          <label>
            <input type="checkbox"/>
          </label>
        </td>
        <td>{d.person_id}</td>
        <td>{d.fee}</td>
        <td>{d.remark}</td>
        <td>{d.trade_date.toLocaleString('en-US')}</td>
      </tr>)}
      </tbody>
    </Table>

    <Pagination
      currentPage={currentPage}
      onPageSelect={onPageSelect}
      pageSize={pageSize}
      total={count}
      limit={limit}
    />

  </div>)

}

export default Trades;
