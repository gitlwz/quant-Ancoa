import React from 'react';
import { Input, Divider, Row, Col, Button, Card } from 'quant-ui';

const TextArea = Input.TextArea;

const Comments = () => {
    return (
        <div>
            <Divider>评论</Divider>
            <Card>
                <div>添加评论(输入文本如下)</div>
                <TextArea rows={8} />
                <Row type="flex" justify="space-between" style={{marginTop: 5}}>
                    <Col>
                        <Button>提交评论</Button>
                    </Col>

                    <Col>
                        <Button>之前的评论</Button>
                        <Button style={{marginLeft: 5}}>预定义的评论</Button>
                        <Button style={{marginLeft: 5}}>管理评论</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Comments;