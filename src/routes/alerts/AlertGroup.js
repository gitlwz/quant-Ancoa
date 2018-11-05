import React from 'react';
import { TagSelect } from "quant-ui"

const AlertGroup = ({onSelect, defaultValue = [], dataSource = []}) => {

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
        defaultValue={defaultValue}
        onChange={onSelect} 
        style={tagSelectStyle}>
        <TagSelect.Option value="Unassigned">未分配({dataSource.filter(d => d.status === "Unassigned").length})</TagSelect.Option>
        <TagSelect.Option value="Open">已分配({dataSource.filter(d => d.status === "Open").length})</TagSelect.Option>
        <TagSelect.Option value="Resolved">已解决({dataSource.filter(d => d.status === "Resolved").length})</TagSelect.Option>
        <TagSelect.Option value="Closed">已关闭({dataSource.filter(d => d.status === "Closed").length})</TagSelect.Option>
      </TagSelect>
    </div>
  );
};

export default AlertGroup;