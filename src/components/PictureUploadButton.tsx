import { Button } from "antd-mobile";
import * as React from "react";
import "./PictureUploadButton.css";

interface IPictureUploadButtonProps {
    onUpload?: (any);
    type?: 'primary' | 'warning' | 'ghost';
}

class PictureUploadButton extends React.Component<IPictureUploadButtonProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public onChange = (event: any) => {
        if (!this.props.onUpload) {
            return;
        }
        const files = Array.from(event.target.files);
        this.props.onUpload(files);
    };

    public render() {
        return (
            <Button className={'PictureUploadButton'} type={this.props.type || undefined}>
                <input onChange={this.onChange} className={'image-input'} type='file' accept='image/*'/>
                {
                    this.props.children
                }
            </Button>
        );
    }
}

export default PictureUploadButton;
