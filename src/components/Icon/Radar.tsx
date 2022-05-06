import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Radar: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 7.19956C14.9554 6.44633 13.657 6 12.25 6C8.79822 6 6 8.68629 6 12C6 15.3137 8.79822 18 12.25 18C13.657 18 14.9554 17.5537 16 16.8004M17.8667 20.0007C16.2093 21.2561 14.1491 22 11.9167 22C6.43984 22 2 17.5228 2 12C2 6.47715 6.43984 2 11.9167 2C14.1491 2 16.2093 2.74389 17.8667 3.99927C18.2444 4.25877 18.5 4.5 18.5 5M14 10L20.5 3.5M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default Radar;
