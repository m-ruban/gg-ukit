import React, { FC, ReactNode } from 'react';
import Image, { BasicImageProps } from 'gg-ukit/components/Image';
import 'gg-ukit/components/Image/hoveredImage.less';

export interface HoveredImageProps extends BasicImageProps {
    noted?: boolean;
    hoverView?: ReactNode;
}

const HoveredImage: FC<HoveredImageProps> = ({ src, alt, noted, hoverView, loading, ...props }) => {
    return (
        <div className="gg-hovered-img" {...props}>
            <Image src={src} alt={alt} noted={noted} loading={loading} wrapped />
            <div className="gg-hovered-img-overlay">
                <div className="gg-hovered-img-overlay-content">
                    {alt && <div className="gg-hovered-img-alt">{alt}</div>}
                    <div className="gg-hovered-img-hover-view">{hoverView}</div>
                </div>
            </div>
            <div className="gg-hovered-img-mobile-hover-view">
                <div className="gg-hovered-img-mobile-hover-view-content">{hoverView}</div>
            </div>
        </div>
    );
};

export default HoveredImage;
