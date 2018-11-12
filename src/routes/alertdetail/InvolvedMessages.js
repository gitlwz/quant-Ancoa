import React from 'react';
import { Button, Divider } from 'quant-ui';

const InvolvedMessages = ({message, changeView}) => {

    function handleClick(e) {
        changeView(e.target.name);
    }
    return (
        <div>
            <div>
                <Button name="analytics" onClick={handleClick}>在成交视图中查看相关消息</Button>
                <Button name="orderview" onClick={handleClick} style={{marginLeft: 5}}>在订单视图中查看相关消息</Button>
                <Button name="dataView" onClick={handleClick} style={{marginLeft: 5}}>在数据视图中查看相关消息</Button>
            </div>

            <Divider style={{margin: '10px 0'}} />

            <div style={{display: 'flex'}}>
                <div style={{'flex': 1}}>{message}</div>
                
                <Button name="analytics" onClick={handleClick}>成交视图</Button>
                <Button name="orderview" onClick={handleClick} style={{marginLeft: 5}}>订单视图</Button>
                <Button name="dataView" onClick={handleClick} style={{marginLeft: 5}}>数据视图</Button>
                <Button name="networkView" onClick={handleClick} style={{marginLeft: 5}}>关联关系视图</Button>
            </div>
        </div>
    );
};

export default InvolvedMessages;