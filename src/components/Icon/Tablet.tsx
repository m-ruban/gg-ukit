import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Tablet: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <rect x="11" y="18" width="2" height="2" rx="1" style={{ transform: `scale(${scale})` }} fill={color} />
        </svg>
    </IconWrapper>
);

export default Tablet;
