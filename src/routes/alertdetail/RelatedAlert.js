import React from 'react';
import { Form, Input, Divider, Button, Card, } from 'quant-ui';

const FormItem = Form.Item;

const RelatedAlert = ({form, onSubmit}) => {
    const { getFieldDecorator, getFieldValue } = form;
    const alertId = getFieldValue('alertId');

    const handleSubmit = (e) => {
        onSubmit(alertId);
        e.preventDefault();
    }

    return (
        <div>
            <Divider>相关警报</Divider>
            <Card>
                <Form layout='inline' onSubmit={handleSubmit}>
                    <FormItem label="输入警报ID: ">
                        {getFieldDecorator('alertId')(
                            <Input type="text" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={!(alertId && alertId.trim())}
                        >
                            提交
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    );
};

export default Form.create()(RelatedAlert);