import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const LockUnlockedAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 10V5C15 2.79086 16.7909 1 19 1C21.2091 1 23 2.79086 23 5V8.27273M8 15.9231L10 18L14 14M11 23C7.13401 23 4 19.866 4 16C4 12.134 7.13401 9 11 9C14.866 9 18 12.134 18 16C18 19.866 14.866 23 11 23Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default LockUnlockedAlt;
