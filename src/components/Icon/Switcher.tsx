import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Switcher: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8M8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6M8 18C11.3137 18 14 15.3137 14 12C14 8.68629 11.3137 6 8 6"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default Switcher;
