import React, { FC } from 'react';
import 'components/Image/image.less';

interface FullSizeImageProps {
    src: string;
    alt: string;
}

const FullSizeImage: FC<FullSizeImageProps> = ({ src, alt }) => (
    <img className="gg-full-size-image" src={src} alt={alt} />
);

export default FullSizeImage;
