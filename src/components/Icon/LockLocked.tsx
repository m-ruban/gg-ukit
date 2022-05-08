import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const LockLocked: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11H7ZM15 11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11H15ZM9 11V6H7V11H9ZM15 6V11H17V6H15ZM12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1V3ZM12 1C9.23858 1 7 3.23858 7 6H9C9 4.34315 10.3431 3 12 3V1ZM7 12H17V10H7V12ZM18 13V19H20V13H18ZM15 22H9V24H15V22ZM6 19V13H4V19H6ZM9 22C7.34315 22 6 20.6569 6 19H4C4 21.7614 6.23858 24 9 24V22ZM18 19C18 20.6569 16.6569 22 15 22V24C17.7614 24 20 21.7614 20 19H18ZM17 12C17.5523 12 18 12.4477 18 13H20C20 11.3431 18.6569 10 17 10V12ZM7 10C5.34315 10 4 11.3431 4 13H6C6 12.4477 6.44772 12 7 12V10Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
            <path
                d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default LockLocked;
