import React, { FC } from 'react';
import classnames from 'classnames';
import 'gg-ukit/components/Image/image.less';

export interface BasicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

interface ImageProps extends BasicImageProps {
    wrapped?: boolean;
    noted?: boolean;
}

const Image: FC<ImageProps> = ({ src, alt, wrapped, noted, ...props }) => (
    <img
        className={classnames('gg-img', { 'gg-img_wrapped': wrapped }, { 'gg-img_noted': noted })}
        src={src}
        alt={alt}
        {...props}
    />
);

export default Image;
