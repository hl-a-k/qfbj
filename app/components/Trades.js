// @flow
import React,{ Children, Component, PropTypes }  from 'react';
import { Table,Pagination,Modal,ModalBody,ModalFooter,ModalHeader,Button } from 'elemental'

import { Field, reduxForm } from 'redux-form'

class PassContext extends React.Component {
  getChildContext () {
    return this.props.context;
  }
  render () {
    return Children.only(this.props.children);
  }
};
PassContext.propTypes = {
  context: PropTypes.object.isRequired,
};

PassContext.childContextTypes = {
  store: PropTypes.object,
  storeSubscription: PropTypes.object,
  "@@contextSubscriber/router": PropTypes.object,
  "router":PropTypes.object, };

class TradeForm extends React.Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>用户</label>
        <Field name="person_id" component="select">
          <option value="1">周文瀚</option>
          <option value="2">沈丹丹</option>
        </Field>
        </div>

        <div>
          <label htmlFor="fee">金额</label>
          <Field name="fee" component="input" type="number"/>
        </div>
        <div>
          <label htmlFor="remark">备注</label>
          <Field name="remark" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="trade_date">时间</label>
          <Field name="trade_date" component="input" type="date" />
        </div>
        <div>
          <label>交易类型</label>
          <Field name="trade_type_id" component="select">
            <option value="1">生活</option>
            <option value="2">娱乐</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
var TradeForm1 = reduxForm({
  form: 'trade' // a unique name for this form
})(TradeForm);


export default class Trades extends React.Component{

  render(){
    var {rows, currentPage, onPageSelect, pageSize, count, limit,modalIsOpen,toggleModal} = this.props

    return (<div>
      <Table>
        <colgroup>
          <col width="5%"/>
          <col width="15%"/>
          <col width="10%"/>
          <col width=""/>
          <col width="20%"/>
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
          <td>{d.person.name}</td>
          <td>{d.fee}</td>
          <td>{d.remark}</td>
          <td>{d.trade_date.toISOString().substring(0, 10)}</td>
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

      <Button type="primary" onClick={toggleModal}> Add </Button>

      <Modal isOpen={modalIsOpen} backdropClosesModal>
        <ModalHeader text="Trade Editor" showCloseButton onClose={toggleModal} />
        <ModalBody>
        <PassContext context={this._reactInternalInstance._context}>
        <TradeForm1 onSubmit={toggleModal} />
        </PassContext>
        </ModalBody>
      </Modal>

    </div>)
  }
}

