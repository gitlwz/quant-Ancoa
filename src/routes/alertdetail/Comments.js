import React from 'react';
import { Form, Input, Divider, Row, Col, Button, Upload, Icon, Card, Table } from 'quant-ui';

const TextArea = Input.TextArea;

const Comments = () => {
    return (
        <div>
            <Divider>Comments</Divider>
            <Card>
                <div>Add Comment(Enter Text Below)</div>
                <TextArea rows={8} />
                <Row type="flex" justify="space-between" style={{marginTop: 5}}>
                    <Col>
                        <Button>Submit Comment</Button>
                    </Col>

                    <Col>
                        <Button>Previous Comments</Button>
                        <Button style={{marginLeft: 5}}>Predefined Comments</Button>
                        <Button style={{marginLeft: 5}}>Manage Comments</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Comments;