import React, { FC } from 'react';
import classnames from 'classnames';
import 'gg-ukit/components/Image/image.less';

export enum ImageLoad {
    Eager = 'eager',
    Lazy = 'lazy',
}

export interface BasicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    loading?: ImageLoad;
}

export interface ImageProps extends BasicImageProps {
    wrapped?: boolean;
    noted?: boolean;
}

const Image: FC<ImageProps> = ({ src, alt, wrapped, noted, loading = ImageLoad.Eager, ...props }) => (
    <img
        className={classnames('gg-img', { 'gg-img_wrapped': wrapped }, { 'gg-img_noted': noted })}
        src={src}
        alt={alt}
        loading={loading}
        {...props}
    />
);

export default Image;
