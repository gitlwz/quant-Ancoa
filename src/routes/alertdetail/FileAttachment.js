import React from 'react';
import { Form, Input, Divider, Row, Col, Button, Upload, Icon, Card, Table } from 'quant-ui';

class FileAttachment extends React.Component {
    
    state = {
        fileList: [],
        uploading: false,
    }

    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });

        // 上传文件...
        console.log('To be upload...')
        // reqwest({
        //     url: '//jsonplaceholder.typicode.com/posts/',
        //     method: 'post',
        //     processData: false,
        //     data: formData,
        //     success: () => {
        //         this.setState({
        //         fileList: [],
        //         uploading: false,
        //         });
        //         message.success('upload successfully.');
        //     },
        //     error: () => {
        //         this.setState({
        //         uploading: false,
        //         });
        //         message.error('upload failed.');
        //     },
        // });
    }

    render() {
        const { uploading } = this.state;
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                return {
                    fileList: newFileList,
                };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));
                return false;
            },
            fileList: this.state.fileList,
        };
        
        return (
            <div>
                <Divider>文件附件</Divider>
                <Card>
                    <div style={{width: 400}}>
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> 浏览文件
                            </Button>
                        </Upload>
                    </div>
                    <Button
                        className="upload-demo-start"
                        type="primary"
                        onClick={this.handleUpload}
                        disabled={this.state.fileList.length === 0}
                        loading={uploading}
                        style={{marginTop: 10}}
                    >
                        {uploading ? '正在上传' : '提交文件' }
                    </Button>
                </Card>
            </div>
        );
    }
}

export default FileAttachment;