import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ArrowRefreshAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.5 18V14C6.0621 14 7 14 8.5 14M19.5 6L19.5 10H15.5M5.50004 14.6031C6.53299 17.18 9.05397 19 12 19C15.1711 19 17.8496 16.8915 18.7102 14M5.28992 10C6.15047 7.10851 8.82902 5 12 5C15.0741 5 17.6854 6.9816 18.6262 9.73712"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default ArrowRefreshAlt;
