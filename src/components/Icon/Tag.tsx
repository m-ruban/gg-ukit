import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Tag: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 7C2 5.89543 2.89543 5 4 5H15.0801C15.664 5 16.2187 5.25513 16.5986 5.69842L20.8844 10.6984C21.5263 11.4474 21.5263 12.5526 20.8844 13.3016L16.5986 18.3016C16.2187 18.7449 15.664 19 15.0801 19H4C2.89543 19 2 18.1046 2 17V7Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="15" cy="12" r="1" style={{ transform: `scale(${scale})` }} stroke={color} strokeWidth="2" />
        </svg>
    </IconWrapper>
);

export default Tag;
