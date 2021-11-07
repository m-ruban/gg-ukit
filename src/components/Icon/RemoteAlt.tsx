import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const RemoteAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 9C11 9.55228 10.5523 10 10 10C9.44772 10 9 9.55228 9 9C9 8.44772 9.44772 8 10 8C10.5523 8 11 8.44772 11 9Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
            <path
                d="M15 9C15 9.55228 14.5523 10 14 10C13.4477 10 13 9.55228 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
            <path
                d="M11 12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
            <path
                d="M11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
            <path
                d="M15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12H15ZM13 15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15H13ZM9 3H15V1H9V3ZM16 4V20H18V4H16ZM15 21H9V23H15V21ZM8 20V4H6V20H8ZM9 21C8.44772 21 8 20.5523 8 20H6C6 21.6569 7.34315 23 9 23V21ZM16 20C16 20.5523 15.5523 21 15 21V23C16.6569 23 18 21.6569 18 20H16ZM15 3C15.5523 3 16 3.44772 16 4H18C18 2.34315 16.6569 1 15 1V3ZM9 1C7.34315 1 6 2.34315 6 4H8C8 3.44772 8.44772 3 9 3V1ZM13 12V15H15V12H13Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default RemoteAlt;
