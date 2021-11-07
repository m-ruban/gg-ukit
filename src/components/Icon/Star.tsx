import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Star: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.81006 13.8172L2.21346 9.17698C2.14136 9.11721 2.18363 9 2.27728 9H9.5L11.9069 1.77916C11.9372 1.68855 12.065 1.6878 12.0963 1.77805L14.5978 9H21.7231C21.8168 9 21.859 9.1171 21.7871 9.17692L16.2017 13.8172L17.9355 20.7422C17.9579 20.8318 17.8574 20.9013 17.7815 20.8488L12.0059 16.8501L6.21881 20.8488C6.14286 20.9013 6.04243 20.8316 6.06499 20.7421L7.81006 13.8172Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default Star;
