import React from 'react';
import { TagSelect } from "quant-ui"

const AlertGroup = ({onSelect = (value) => console.log('select: ' + value)}) => {

  const tagSelectStyle = {
    position: 'absolute', 
    top: 12, 
    zIndex: 10,
    background: 'white',
    marginLeft: 10,
    borderRadius: 4
  }

  return (
    <div style={{position: 'relative'}}>
      <TagSelect 
        defaultValue={['assignedToMe', 'unassigned']}
        onChange={onSelect} 
        style={tagSelectStyle}>
        <TagSelect.Option value="unassigned">未分配(5)</TagSelect.Option>
        <TagSelect.Option value="assignedToMe">已分配(3)</TagSelect.Option>
        <TagSelect.Option value="solved">已解决(1)</TagSelect.Option>
        <TagSelect.Option value="closed">已关闭(4)</TagSelect.Option>
      </TagSelect>
    </div>
  );
};

export default AlertGroup;