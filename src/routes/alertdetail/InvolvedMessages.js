import React from 'react';
import { Button, Divider } from 'quant-ui';

const InvolvedMessages = ({message}) => {
    return (
        <div>
            <div>
                <Button>View Involved Messages In TradeView</Button>
                <Button style={{marginLeft: 5}}>View Involved Messages In OrderView</Button>
                <Button style={{marginLeft: 5}}>View Involved Messages In DataView</Button>
            </div>

            <Divider style={{margin: '10px 0'}} />

            <div style={{display: 'flex'}}>
                <div style={{'flex': 1}}>{message}</div>
                
                <Button>TradeView</Button>
                <Button style={{marginLeft: 5}}>OrderView</Button>
                <Button style={{marginLeft: 5}}>DataView</Button>
                <Button style={{marginLeft: 5}}>NetworkView</Button>
            </div>
        </div>
    );
};

export default InvolvedMessages;