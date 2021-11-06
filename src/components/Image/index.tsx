import React, { FC } from 'react';
import classnames from 'classnames';
import 'components/Image/image.less';

export enum ImageKind {
    Left = 'left',
    Right = 'right',
}

interface ImageProps {
    src: string;
    alt: string;
    kind?: ImageKind;
    href?: string;
    note?: string;
}

const Image: FC<ImageProps> = ({ src, alt, kind, href, note }) => {
    return (
        <div
            className={classnames(
                'gg-img-wrapper',
                { [`gg-img-wrapper_left-or-right`]: kind },
                { [`gg-img-wrapper_${kind}`]: kind }
            )}
        >
            <img className={classnames('gg-img', { 'gg-img_noted': note })} src={src} alt={alt} />
            {note && <div className="gg-img-note">{note}</div>}
        </div>
    );
};

export default Image;
