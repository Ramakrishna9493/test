import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Modal } from 'antd';
import axios from "axios"

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const POSTAPI = (props) => {

    const [form] = Form.useForm()

    const onFinish = (e) => {
        axios.post("https://admin.srkprojects.com/web/api/client/v1/contact-us/", e)
    };

    const modalSubmit = () => {
        form.submit()
        props.setModalVisible(false)
    }

    return (
        <Modal onOk={modalSubmit} visible={props.visible} onCancel={() => props.setModalVisible(false)}>
            <Form {...layout} form={form} onFinish={(e) => onFinish(e)}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="message"
                    label="message"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default POSTAPI