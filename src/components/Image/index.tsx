import React, { FC, ReactNode, useState, useRef } from 'react';
import classnames from 'classnames';
import 'components/Image/image.less';

export enum ImageKind {
    Left = 'left',
    Right = 'right',
}

interface ImageProps {
    src: string;
    alt: string;
    lineColor?: string;
    hoverView?: ReactNode;
    onClick?: () => void;
    kind?: ImageKind;
    note?: string;
}

const Image: FC<ImageProps> = ({ src, alt, kind, note, hoverView, lineColor = '#DB9D39', onClick }) => {
    const [hover, setHover] = useState<boolean>(false);
    const img = useRef<HTMLImageElement>();
    return (
        <div
            className={classnames(
                'gg-img-wrapper',
                { [`gg-img-wrapper_left-or-right`]: kind },
                { [`gg-img-wrapper_${kind}`]: kind }
            )}
        >
            {hoverView && hover && (
                <div
                    style={{ width: img.current?.width, height: img.current?.height }}
                    className="gg-img-hover-wrapper"
                    onMouseLeave={() => setHover(false)}
                    onClick={onClick}
                >
                    {hoverView}
                    <div style={{ backgroundColor: lineColor }} className="gg-img-hover-line" />
                </div>
            )}
            <img
                ref={img}
                className={classnames('gg-img', { 'gg-img_noted': note }, { 'gg-img_hovered': hover })}
                src={src}
                alt={alt}
                onMouseEnter={() => setHover(true)}
            />
            {note && <div className="gg-img-note">{note}</div>}
        </div>
    );
};

export default Image;
