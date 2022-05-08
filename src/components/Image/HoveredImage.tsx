import React, { FC, ReactNode, useState, useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import Colors from 'gg-ukit/modules/colors';
import Image, { BasicImageProps } from 'gg-ukit/components/Image';
import Supports from 'gg-ukit/modules/support';
import 'gg-ukit/components/Image/hoveredImage.less';

export interface HoveredImageProps extends BasicImageProps {
    note?: string;
    hoverView?: ReactNode;
    lineColor?: string;
    onHoverViewClick?: () => void;
}

const HoveredImage: FC<HoveredImageProps> = ({
    src,
    alt,
    note,
    hoverView,
    lineColor = Colors.PrimaryMinor,
    onHoverViewClick,
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const imgRef = useRef<HTMLImageElement>();
    return (
        <div
            onMouseLeave={() => {
                if (hover) {
                    setHover(false);
                }
            }}
        >
            <CSSTransition
                in={hover}
                timeout={300}
                classNames={{
                    enter: 'gg-img-hover-overlay',
                    enterActive: 'gg-img-hover-overlay gg-img-hover-overlay_visible',
                    enterDone: 'gg-img-hover-overlay gg-img-hover-overlay_visible',
                }}
            >
                <>
                    {hoverView && hover && (
                        <div
                            className="gg-img-hover"
                            style={{ width: imgRef.current?.width, height: imgRef.current?.height }}
                            onMouseLeave={() => {
                                setHover(false);
                            }}
                            onClick={onHoverViewClick}
                        >
                            {hoverView}
                            <div style={{ backgroundColor: lineColor }} className="gg-img-hover-line" />
                        </div>
                    )}
                </>
            </CSSTransition>
            <Image
                ref={imgRef}
                src={src}
                alt={alt}
                hover={hover}
                note={note}
                onTouchStart={() => {
                    setHover(true);
                }}
                onMouseEnter={() => {
                    if (!Supports.mobile()) {
                        setHover(true);
                    }
                }}
                wrapped
            />
        </div>
    );
};

export default HoveredImage;
