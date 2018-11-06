import React from 'react';
import { TagSelect, Button } from "quant-ui"

const statusList = [
  {key: 'Unassigned', text: '未分配'},
  {key: 'Open', text: '已分配'},
  {key: 'Resolved', text: '已解决'},
  {key: 'Closed', text: '已关闭'},
]

class AlertGroup extends React.Component {
  state = {
    value: this.props.defaultValue
  }
  checkAll = () => {
    const value = statusList.map(status => status.key)
    this.setState({ value })
    this.props.onSelect(value)
  }
  onChange = value => {
    this.setState({ value });
    this.props.onSelect(value)
  };
  render (){
    const { dataSource } = this.props;
    const tagSelectStyle = {
      position: 'absolute', 
      top: 22, 
      zIndex: 10,
      background: 'white',
      marginLeft: 20,
      borderRadius: 4
    }
    return (
      <div style={{position: 'relative'}}>
        <div
          style={tagSelectStyle}
          >
          <Button
            style={{float: 'left'}}
            onClick={this.checkAll}
          >
            全部 ({dataSource.length})
          </Button>
          <TagSelect
            value={this.state.value}
            onChange={this.onChange} 
            hideCheckAll={true}
            style={{float: 'left', marginLeft: 20}}
          >
            {statusList.map(status => (
              <TagSelect.Option value={status.key} key={status.key}>
                {status.text}({dataSource.filter(d => d.status === status.key).length})
              </TagSelect.Option>
            ))}
          </TagSelect>
        </div>
      </div>
    );
  };
}

export default AlertGroup;