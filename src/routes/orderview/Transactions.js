import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from "quant-ui";
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
class Member extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="anc-block-height">
                <Table columns={columns} dataSource={dataSource} size="middle" bordered />
            </div>
        );
    }
}
export default connect(() => {
    return {
    }
})(
    Member
)
