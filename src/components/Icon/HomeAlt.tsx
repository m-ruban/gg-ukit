import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const HomeAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 5.5002V19.0002C20 20.6571 18.6569 22.0002 17 22.0002H7C5.34315 22.0002 4 20.6571 4 19.0002V9.5002M1 12.0002L10.6547 3.22325C11.4175 2.52975 12.5825 2.52975 13.3453 3.22324L23 12.0002M14 15.5002V21.8002C14 21.9107 13.9105 22.0002 13.8 22.0002H10.2C10.0895 22.0002 10 21.9107 10 21.8002V15.5002C10 15.2241 10.2239 15.0002 10.5 15.0002H13.5C13.7761 15.0002 14 15.2241 14 15.5002Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default HomeAlt;
