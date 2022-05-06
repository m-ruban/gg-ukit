import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Scan: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.54545 3H6C4.34315 3 3 4.34315 3 6V7.90909M14.4545 3H18C19.6569 3 21 4.34315 21 6V7.90909M21 16.0909V18C21 19.6569 19.6569 21 18 21H14.4545M9.54545 21H6C4.34315 21 3 19.6569 3 18V16.0909M23 12H1"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default Scan;
