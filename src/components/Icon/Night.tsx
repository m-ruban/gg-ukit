import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Night: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.5993 15.347C12.1806 15.347 8.59833 11.7605 8.59833 7.33667C8.59833 6.01071 8.92105 4.76128 9.49114 3.66038C9.6165 3.4183 9.4003 3.13008 9.14271 3.21934C5.56701 4.45834 3 7.85799 3 11.859C3 16.9075 7.08765 21 12.1302 21C16.1602 21 19.5782 18.3856 20.7889 14.7591C20.8752 14.5006 20.5846 14.2876 20.3439 14.4156C19.2266 15.0097 17.9527 15.347 16.5993 15.347Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default Night;
