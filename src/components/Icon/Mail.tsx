import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Mail: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 6L12.6644 13.4095C12.2855 13.7462 11.7145 13.7462 11.3356 13.4095L3 6M9 12L2 19M22 19L15 12M4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default Mail;
