import React, { forwardRef } from 'react';
import classnames from 'classnames';
import 'components/Image/image.less';

export interface BasicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

interface ImageProps extends BasicImageProps {
    wrapped?: boolean;
    note?: string;
    hover?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, alt, wrapped, note, hover, ...props }, forwardRef) => (
    <img
        ref={forwardRef}
        className={classnames(
            'gg-img',
            { 'gg-img_wrapped': wrapped },
            { 'gg-img_noted': note },
            { 'gg-img_hovered': hover }
        )}
        src={src}
        alt={alt}
        {...props}
    />
));

Image.displayName = 'Image';

export default Image;
