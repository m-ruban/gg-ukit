import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const DocumentTextAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 10H20C20 9.73478 19.8946 9.48043 19.7071 9.29289L19 10ZM12 3L12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2V3ZM15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12V14ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14V12ZM13 18C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16V18ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18V16ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8V10ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10V8ZM17 20H7V22H17V20ZM6 19V5H4V19H6ZM18 10V19H20V10H18ZM7 4H12V2H7V4ZM19.7071 9.29289L12.7071 2.29289L11.2929 3.70711L18.2929 10.7071L19.7071 9.29289ZM11 3V9.5H13V3H11ZM12.5 11H19V9H12.5V11ZM7 20C6.44771 20 6 19.5523 6 19H4C4 20.6569 5.34315 22 7 22V20ZM17 22C18.6569 22 20 20.6569 20 19H18C18 19.5523 17.5523 20 17 20V22ZM11 9.5C11 10.3284 11.6716 11 12.5 11V9C12.7761 9 13 9.22386 13 9.5H11ZM6 5C6 4.44772 6.44772 4 7 4V2C5.34315 2 4 3.34315 4 5H6ZM15 12H8V14H15V12ZM13 16H8V18H13V16ZM9 8H8V10H9V8Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default DocumentTextAlt;
