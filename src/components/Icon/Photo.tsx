import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Photo: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 9H18M7 5H9M6 20H18C19.6569 20 21 18.6569 21 17V9C21 7.34315 19.6569 6 18 6H6C4.34315 6 3 7.34315 3 9V17C3 18.6569 4.34315 20 6 20ZM14 13C14 15.2091 12.2091 17 10 17C7.79086 17 6 15.2091 6 13C6 10.7909 7.79086 9 10 9C12.2091 9 14 10.7909 14 13Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default Photo;
