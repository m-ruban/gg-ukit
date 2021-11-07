import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ArrowLogout: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 17L21 12M21 12L16 7M21 12H9M13 22C10.3478 22 7.8043 20.9464 5.92893 19.0711C4.05357 17.1957 3 14.6522 3 12C3 9.34784 4.05357 6.8043 5.92893 4.92893C7.8043 3.05357 10.3478 2 13 2"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default ArrowLogout;
