import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Laptop: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 20H23M4 17H20C20.5523 17 21 16.5523 21 16V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V16C3 16.5523 3.44772 17 4 17Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default Laptop;
