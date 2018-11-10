import { Button } from "antd-mobile";
import { ButtonProps } from "antd-mobile/lib/button";
import * as React from "react";
import "./PictureUploadButton.css";

interface IPictureUploadButtonProps extends ButtonProps{
    onUpload?: (any);
}

class PictureUploadButton extends React.Component<IPictureUploadButtonProps, any>{
    public buttonProps: ButtonProps = {};
    constructor(props: IPictureUploadButtonProps) {
        super(props);

        this.buttonProps = {
            activeClassName: props.activeClassName,
            activeStyle: props.activeStyle,
            className: props.className,
            disabled: props.disabled,
            icon: props.icon,
            inline: props.inline,
            loading: props.loading,
            onClick: props.onClick,
            prefixCls: props.prefixCls,
            role: props.role,
            size: props.size,
            style: props.style,
            type: props.type,
        }
    }

    public onChange = (event: any) => {
        if (!this.props.onUpload) {
            return;
        }
        const files = Array.from(event.target.files);
        this.props.onUpload(files);
    };

    public render() {
        return (<Button {...this.buttonProps as ButtonProps}>
                <input onChange={this.onChange} className={'image-input'} type='file' accept='image/*'/>
                {
                    this.props.children
                }
            </Button>);
    }
}

export default PictureUploadButton;
