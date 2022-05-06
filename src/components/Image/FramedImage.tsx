import React, { FC } from 'react';
import classnames from 'classnames';
import HoveredImage, { HoveredImageProps } from 'components/Image/HoveredImage';
import 'gg-ukit/components/Image/framedImage.less';

export enum FramedImageKind {
    Left = 'left',
    Right = 'right',
}

interface FramedImageProps extends HoveredImageProps {
    kind?: FramedImageKind;
}

const FramedImage: FC<FramedImageProps> = ({ src, alt, kind, note, lineColor, hoverView, onHoverViewClick }) => {
    return (
        <div
            className={classnames(
                'gg-img-wrapper',
                { [`gg-img-wrapper_left-or-right`]: kind },
                { [`gg-img-wrapper_${kind}`]: kind }
            )}
        >
            <HoveredImage
                src={src}
                alt={alt}
                note={note}
                lineColor={lineColor}
                hoverView={hoverView}
                onHoverViewClick={onHoverViewClick}
            />
            {note && <div className="gg-img-note">{note}</div>}
        </div>
    );
};

export default FramedImage;
