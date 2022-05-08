import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Settings: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 16H3M6 16C6 17.6569 7.34315 19 9 19C10.6569 19 12 17.6569 12 16M6 16C6 14.3431 7.34315 13 9 13C10.6569 13 12 14.3431 12 16M21 16H12M12 8H3M12 8C12 9.65685 13.3431 11 15 11C16.6569 11 18 9.65685 18 8M12 8C12 6.34315 13.3431 5 15 5C16.6569 5 18 6.34315 18 8M21 8H18"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default Settings;
