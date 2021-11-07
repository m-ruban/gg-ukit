import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const TrashAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 9V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V9M4 6H20M16 6V5C16 3.89543 15.1046 3 14 3H11.5H10C8.89543 3 8 3.89543 8 5V6M14 12L12 14M12 14L10 16M12 14L10 12M12 14L14 16"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default TrashAlt;
