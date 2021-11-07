import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const SmartHome: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 22.5001V16.0001C15 15.1716 14.3284 14.5001 13.5 14.5001H10.5C9.67157 14.5001 9 15.1716 9 16.0001V22.5001M10.0069 3.6606L4.00691 8.99394C3.36644 9.56324 3 10.3793 3 11.2362V19.889C3 21.5458 4.34315 22.889 6 22.889H18C19.6569 22.889 21 21.5458 21 19.889V11.2362C21 10.3793 20.6336 9.56324 19.9931 8.99394L13.9931 3.6606C12.8564 2.65024 11.1436 2.65024 10.0069 3.6606Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default SmartHome;
