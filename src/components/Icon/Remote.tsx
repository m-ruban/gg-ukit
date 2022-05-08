import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Remote: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 12.75L8 12.75L7 12.75ZM9.25 10.5L9.25 11.5H9.25V10.5ZM7 17.5L6 17.5L7 17.5ZM17 17.5L18 17.5V17.5H17ZM17 12.75L16 12.75V12.75H17ZM14.75 10.5L14.75 9.5H14.75V10.5ZM8 8C8 8.55228 8.44772 9 9 9C9.55228 9 10 8.55228 10 8H8ZM14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8H14ZM4 8C4 8.55228 4.44772 9 5 9C5.55228 9 6 8.55228 6 8H4ZM18 8C18 8.55228 18.4477 9 19 9C19.5523 9 20 8.55228 20 8H18ZM16 12.75V17.5H18V12.75H16ZM8 17.5L8 12.75L6 12.75L6 17.5L8 17.5ZM9.25 11.5H14.75V9.5H9.25V11.5ZM8 12.75C8 12.0596 8.55964 11.5 9.25 11.5L9.25 9.5C7.45507 9.5 6 10.9551 6 12.75L8 12.75ZM12 21.5C9.79086 21.5 8 19.7091 8 17.5L6 17.5C6 20.8137 8.68629 23.5 12 23.5L12 21.5ZM16 17.5C16 19.7091 14.2091 21.5 12 21.5L12 23.5C15.3137 23.5 18 20.8137 18 17.5L16 17.5ZM18 12.75C18 10.9551 16.5449 9.5 14.75 9.5L14.75 11.5C15.4404 11.5 16 12.0596 16 12.75L18 12.75ZM10 8C10 6.89543 10.8954 6 12 6V4C9.79086 4 8 5.79086 8 8H10ZM12 6C13.1046 6 14 6.89543 14 8H16C16 5.79086 14.2091 4 12 4V6ZM6 8C6 4.68629 8.68629 2 12 2V0C7.58172 0 4 3.58172 4 8H6ZM12 2C15.3137 2 18 4.68629 18 8H20C20 3.58172 16.4183 0 12 0V2Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
            <rect x="10" y="16" width="4" height="4" rx="2" style={{ transform: `scale(${scale})` }} fill={color} />
        </svg>
    </IconWrapper>
);

export default Remote;
