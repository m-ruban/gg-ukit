import React, { FC, ReactNode, useState, useRef } from 'react';
import classnames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import Colors from 'modules/colors';
import 'components/Image/image.less';

export enum ImageKind {
    Left = 'left',
    Right = 'right',
}

interface FullSizeImageProps {
    src: string;
    alt: string;
}

export const FullSizeImage: FC<FullSizeImageProps> = ({ src, alt }) => (
    <img className="gg-full-size-image" src={src} alt={alt} />
);

interface ImageProps {
    src: string;
    alt: string;
    lineColor?: string;
    hoverView?: ReactNode;
    onClick?: () => void;
    kind?: ImageKind;
    note?: string;
}

const Image: FC<ImageProps> = ({ src, alt, kind, note, hoverView, lineColor = Colors.PrimaryMinor, onClick }) => {
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
            <CSSTransition
                in={hover}
                timeout={100}
                classNames={{
                    enter: 'gg-img-hover-overlay',
                    enterActive: 'gg-img-hover-overlay gg-img-hover-overlay_visible',
                    enterDone: 'gg-img-hover-overlay gg-img-hover-overlay_visible',
                    exit: 'gg-img-hover-overlay',
                    exitActive: 'gg-img-hover-overlay',
                }}
            >
                <>
                    {hoverView && hover && (
                        <div
                            className="gg-img-hover"
                            style={{ width: img.current?.width, height: img.current?.height }}
                            onMouseLeave={() => setHover(false)}
                            onClick={onClick}
                        >
                            {hoverView}
                            <div style={{ backgroundColor: lineColor }} className="gg-img-hover-line" />
                        </div>
                    )}
                </>
            </CSSTransition>
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
