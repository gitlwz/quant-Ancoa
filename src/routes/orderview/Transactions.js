import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from "quant-ui";
const dataSource = [];

for(let i = 0 ; i< 100; i++){
    dataSource.push({
        key:i,
        Time: '0.3:01:49.000',
        MsgType: ["Trade","Order","Order"][i%3],
        ActiveUser: 'jolenetan',
        type:i%3,
    })
}

  const columns = [{
    title: '',
    dataIndex: 'index',
    key: 'index',
    render:(text,record,index) => {
        return <span>{index + 1}</span>
    }
  },{
    title: '时间',
    dataIndex: 'Time',
    key: 'Time',
    
  }, {
    title: '类型',
    dataIndex: 'MsgType',
    key: 'MsgType',
    onCell:(record)=>{
        return {
            className:"orderview-Transactions" + record.type
        }
    }
  }, {
    title: '实际用户',
    dataIndex: 'ActiveUser',
    key: 'ActiveUser',
  }];
class Member extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="anc-block-height orderview-Transactions">
                <Table  
                    columns={columns} 
                    dataSource={dataSource} 
                    size="small" 
                    bordered 
                    pagination={false}
                />
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
