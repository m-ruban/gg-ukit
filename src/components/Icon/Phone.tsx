import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Phone: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 3H14M8 22H16C17.1046 22 18 21.1046 18 20V4C18 2.89543 17.1046 2 16 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default Phone;
