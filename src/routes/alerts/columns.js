import React from 'react';
import { Ellipsis, Tag } from 'quant-ui';
import { getLevelColor } from './AlertLevel';

const STATUS_UNASSIGNED = 'Unassigned';
const STATUS_OPEN = 'Open';
const STATUS_RESOLVED = 'Resolved';
const STATUS_CLOSED = 'Closed';

const statusColor = {
  [STATUS_UNASSIGNED]: '',
  [STATUS_OPEN]: 'red',
  [STATUS_RESOLVED]: 'green',
  [STATUS_CLOSED]: 'silver',
}

export default [
  {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
  }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
          return (
              <Tag color={statusColor[record.status]} 
                  style={{
                      textAlign: "center", 
                      cursor: "initial",
                  }}
              >
                  {text}
              </Tag>
          );
      }
  }, {
      title: '优先级',
      dataIndex: 'priority',
      key: 'priority',
  }, {
      title: '分类',
      dataIndex: 'classification',
      key: 'classification',
  }, {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
  }, {
      title: '警告类型',
      dataIndex: 'type',
      key: 'type',
  }, {
      title: '实例名',
      dataIndex: 'name',
      key: 'name',
  }, {
      title: '严重程度',
      dataIndex: 'severity',
      key: 'severity',
      render: (text, record) => {
          return (
              <Tag color={getLevelColor(record.severity)} 
                  style={{ 
                      width: 40, 
                      textAlign: "center", 
                      cursor: "initial",
                  }}
              >
                  {text}
              </Tag>
          );
      }
  }, {
      title: '触发严重程度',
      dataIndex: 'security',
      key: 'security',
  }, {
      title: '触发类别',
      dataIndex: 'instrument',
      key: 'instrument',
  }, {
      title: '货币',
      dataIndex: 'currency',
      key: 'currency',
  }, {
      title: '触发特定信息',
      dataIndex: 'ids',
      key: 'ids',
  }, {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
      width: 360,
      render: (text) => (
          <Ellipsis length={46} tooltip>
              {'hello' + text}
          </Ellipsis>
      )
  },
];