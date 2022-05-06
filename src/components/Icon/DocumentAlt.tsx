import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const DocumentAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 9H20C20 8.73478 19.8946 8.48043 19.7071 8.29289L19 9ZM13 3L13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2V3ZM17 20H7V22H17V20ZM6 19V5H4V19H6ZM18 9V19H20V9H18ZM7 4H13V2H7V4ZM19.7071 8.29289L13.7071 2.29289L12.2929 3.70711L18.2929 9.70711L19.7071 8.29289ZM7 20C6.44772 20 6 19.5523 6 19H4C4 20.6569 5.34315 22 7 22V20ZM17 22C18.6569 22 20 20.6569 20 19H18C18 19.5523 17.5523 20 17 20V22ZM6 5C6 4.44772 6.44772 4 7 4V2C5.34315 2 4 3.34315 4 5H6Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default DocumentAlt;
