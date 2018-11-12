import React, {Component} from 'react';
import { Form, Row, Col, Button, Select } from "quant-ui"

const FormItem = Form.Item;
const Option = Select.Option;

class AlertDetailHeader extends Component{
    handleViewClick = (e) => {
        this.props.changeView(e.target.name);
    }
    render () {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div style={{marginBottom: 5}}>
                <Row type="flex" justify="space-between">
                    <Col>
                        <Form layout="inline">
                            <FormItem> 视图: </FormItem>
                            <FormItem>
                                <Button type="primary" name="analytics" onClick={this.handleViewClick}>成交视图</Button>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" name="orderview" onClick={this.handleViewClick}>订单视图</Button>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" name="dataView" onClick={this.handleViewClick}>数据视图</Button>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" name="networkView" onClick={this.handleViewClick}>关联关系视图</Button>
                            </FormItem>
                        </Form>
                    </Col>

                    <Col>
                        <Form layout="inline">
                            <FormItem
                                label="分派给:"
                            >
                                {getFieldDecorator('assign')(
                                    <Select style={{ width: "140px" }} placeholder="">
                                        <Option value="user1">User 1</Option>
                                        <Option value="user2">User 2</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                label="改变状态:"
                            >
                                {getFieldDecorator('changestatus')(
                                    <Select style={{ width: "140px" }} placeholder="" disabled>
                                        <Option value="unassigned">未分配</Option>
                                        <Option value="open">Open</Option>
                                        <Option value="resolved">Resolved</Option>
                                        <Option value="closed">Closed</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                label="设置优先级:"
                            >
                                {getFieldDecorator('setpriority')(
                                    <Select style={{ width: "140px" }} placeholder="">
                                        <Option value="low">低</Option>
                                        <Option value="medium">中</Option>
                                        <Option value="high">高</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                label="分类:"
                            >
                                {getFieldDecorator('classify')(
                                    <Select style={{ width: "140px" }} placeholder="">
                                        <Option value="unclassified">Unclassified</Option>
                                        <Option value="other">Other</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default Form.create()(AlertDetailHeader);