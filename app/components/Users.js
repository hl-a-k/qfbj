// @flow
import React from 'react';
import { Table,Pagination } from 'elemental'

const Users = ({data, currentPage, onPageSelect, pageSize, total, limit}) => {
  let body = data.map(d=>(  <tr>
    <td>
      <label>
        <input type="checkbox"/>
      </label>
    </td>
    <td>{d.rel_name}</td>
    <td>{d.user_code}</td>
    <td>{d.user_type}</td>
  </tr>))

  return (<div>
    <Table>
      <colgroup>
        <col width="50"/>
        <col width=""/>
        <col width="10%"/>
        <col width="10%"/>
      </colgroup>
      <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox"/>
          </label>
        </th>
        <th>用户名</th>
        <th>学号</th>
        <th>用户类型</th>
      </tr>
      </thead>
      <tbody>
      {body}
      </tbody>
    </Table>

    <Pagination
      currentPage={currentPage}
      onPageSelect={onPageSelect}
      pageSize={pageSize}
      total={total}
      limit={limit}
    />

  </div>)

}

export default Users;
