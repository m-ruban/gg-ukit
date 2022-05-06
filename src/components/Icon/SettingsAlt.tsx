import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const SettingsAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 17V18.75M16 5.25L16 12M8 12L8 18.75M8 5.25V7.5M5 23H19C20.6569 23 22 21.6569 22 20V4C22 2.34315 20.6569 1 19 1H5C3.34315 1 2 2.34315 2 4V20C2 21.6569 3.34315 23 5 23ZM6 12H10C10.5523 12 11 11.5523 11 11V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V11C5 11.5523 5.44772 12 6 12ZM14 17H18C18.5523 17 19 16.5523 19 16V14C19 13.4477 18.5523 13 18 13H14C13.4477 13 13 13.4477 13 14V16C13 16.5523 13.4477 17 14 17Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default SettingsAlt;
