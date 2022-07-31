import React, { FC } from 'react';
import classnames from 'classnames';
import HoveredImage, { HoveredImageProps } from 'gg-ukit/components/Image/HoveredImage';
import 'gg-ukit/components/Image/framedImage.less';

export enum FramedImageKind {
    Left = 'left',
    Right = 'right',
}

export interface FramedImageProps extends HoveredImageProps {
    note: string;
    kind?: FramedImageKind;
}

const FramedImage: FC<FramedImageProps> = ({ src, alt, kind, note, hoverView, loading }) => {
    return (
        <div
            className={classnames(
                'gg-img-wrapper',
                { [`gg-img-wrapper_left-or-right`]: kind },
                { [`gg-img-wrapper_${kind}`]: kind }
            )}
        >
            <HoveredImage src={src} alt={alt} noted={Boolean(note)} hoverView={hoverView} loading={loading} />
            {note && <div className="gg-img-note">{note}</div>}
        </div>
    );
};

export default FramedImage;
