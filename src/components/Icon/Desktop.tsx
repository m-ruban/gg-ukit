import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Desktop: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.4999 18L15.4999 21H8.49991L9.49991 18M6.99991 21H16.9999M4.34801 18H19.6518C21.4385 18 22.8292 16.448 22.6338 14.672L21.6438 5.67198C21.4765 4.15125 20.1917 3 18.6618 3H5.33801C3.8081 3 2.52327 4.15124 2.35599 5.67198L1.36599 14.672C1.17063 16.448 2.56129 18 4.34801 18Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default Desktop;
