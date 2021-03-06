import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const DocumentText: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8V6ZM15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6V8ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11V9ZM15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9V11ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14V12ZM15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12V14ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17V15ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15V17ZM17 20H7V22H17V20ZM6 19V5H4V19H6ZM7 4H17V2H7V4ZM18 5V19H20V5H18ZM17 4C17.5523 4 18 4.44772 18 5H20C20 3.34315 18.6569 2 17 2V4ZM7 20C6.44771 20 6 19.5523 6 19H4C4 20.6569 5.34315 22 7 22V20ZM17 22C18.6569 22 20 20.6569 20 19H18C18 19.5523 17.5523 20 17 20V22ZM6 5C6 4.44772 6.44772 4 7 4V2C5.34315 2 4 3.34315 4 5H6ZM8 8H15V6H8V8ZM8 11H15V9H8V11ZM8 14H15V12H8V14ZM8 17H12V15H8V17Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default DocumentText;
