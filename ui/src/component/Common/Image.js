import React, {Component} from "react"
import {Skeleton} from "antd";

export default class Image extends Component {
    render() {
        const {src, defaultSrc = "/img/imgNotFoundDefault.jpg", loading = false, size = 100, style = {}} = this.props;
        let styleProps = {
            ...style, ...{
                maxWidth: `${size}px`,
                maxHeight: `${size}px`,
                minWidth: `${size}px`,
                minHeight: `${size}px`
            }
        };

        return <Skeleton loading={loading} avatar>
            <img style={styleProps}
                 src={src === null ? defaultSrc : src}
                 onError={(e) => {
                     e.target.onerror = null;
                     e.target.src = defaultSrc
                 }}/>
        </Skeleton>
    }
}