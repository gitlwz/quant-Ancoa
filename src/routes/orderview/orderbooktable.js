import React, { Component } from 'react'
import { Table } from "quant-ui"

let columns = [
    {
        title: 'BID',
        dataIndex: 'key1',
        key: 'key1',
        colSpan: 2,
        align:"center",
        width:"20%",
        onCell:(record)=>{
            let style={}
            if(!!record.key1){
                style = {
                    backgroundColor:"#FF0000"
                }
            }
            return {
                style:style
            }
        }
    },
    {
        title: 'key2',
        dataIndex: 'key2',
        key: 'key2',
        colSpan: 0,
        align:"center",
        width:"20%",
        onCell:(record)=>{
            let style={}
            if(!!record.key2){
                style = {
                    backgroundColor:"#FF0000"
                }
            }
            return {
                style:style
            }
        }
    },
    {
        title: 'Price',
        dataIndex: 'key3',
        key: 'key3',
        align:"center",
        width:"20%",
        onCell:(record)=>{
            let style={}
            if(!!record.key3){
                style = {
                    backgroundColor:"#FFC000"
                }
            }
            return {
                style:style
            }
        }
    },
    {
        title: 'ASK',
        dataIndex: 'key4',
        key: 'key4',
        colSpan: 2,
        align:"center",
        width:"20%",
        onCell:(record)=>{
            let style={}
            if(!!record.key4){
                style = {
                    backgroundColor:"#00B0F0"
                }
            }
            return {
                style:style
            }
        }
    },
    {
        title: 'key5',
        dataIndex: 'key5',
        key: 'key5',
        colSpan: 0,
        align:"center",
        width:"20%",
        onCell:(record)=>{
            let style={}
            if(!!record.key5){
                style = {
                    backgroundColor:"#00B0F0"
                }
            }
            return {
                style:style
            }
        }
    },
]
let dataSource = []
for (let index = 0; index < 20; index++) {
    dataSource.push({
        id:index,
        key1:["","","","","","","","","","","55","300","450","","","240","","","30","",""][index],
        key2:["","","","","","","","","","","","120","","","","","","","","",""][index],
        key3:['1249.56', '1240.30', '1231.05', '1221.79','1212.54', '1203.28', "1194.02","1184.77","1175.51","1166.26","1157.00","1147.74","1138.49","1129.23","1119.98","1110.72","1101.46","1092.21","1082.95","1073.70","1064.44"][index],
        key4:["","23","","","22","","","500","158","251","54","","","","","","","","","",""][index],
        key5:["","23","","","22","","","500","158","251","54","","","","","","","","","",""][index]
    })
    
}

class orderbooktable extends Component {
    render() {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    size="small"
                    bordered
                    pagination={false}
                />
            </div>
        )
    }
}

export default orderbooktable
