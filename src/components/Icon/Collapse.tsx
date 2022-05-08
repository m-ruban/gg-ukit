import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Collapse: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 3V6C8 7.10457 7.10457 8 6 8H3M16 21V18C16 16.8954 16.8954 16 18 16H21M21 8H18C16.8954 8 16 7.10457 16 6V3M3 16L6 16C7.10457 16 8 16.8954 8 18L8 21"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default Collapse;
