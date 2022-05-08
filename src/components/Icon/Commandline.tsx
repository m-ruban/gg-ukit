import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Commandline: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.64018 7.23178C5.21591 6.87821 4.58534 6.93554 4.23178 7.35982C3.87821 7.78409 3.93554 8.41466 4.35982 8.76822L5.64018 7.23178ZM8 10.5L8.64018 11.2682C8.86818 11.0782 9 10.7968 9 10.5C9 10.2032 8.86818 9.92177 8.64018 9.73178L8 10.5ZM4.35982 12.2318C3.93554 12.5853 3.87821 13.2159 4.23178 13.6402C4.58534 14.0645 5.21591 14.1218 5.64018 13.7682L4.35982 12.2318ZM4 4H20V2H4V4ZM22 6V18H24V6H22ZM20 20H4V22H20V20ZM2 18V6H0V18H2ZM4 20C2.89543 20 2 19.1046 2 18H0C0 20.2091 1.79086 22 4 22V20ZM22 18C22 19.1046 21.1046 20 20 20V22C22.2091 22 24 20.2091 24 18H22ZM20 4C21.1046 4 22 4.89543 22 6H24C24 3.79086 22.2091 2 20 2V4ZM4 2C1.79086 2 0 3.79086 0 6H2C2 4.89543 2.89543 4 4 4V2ZM4.35982 8.76822L7.35982 11.2682L8.64018 9.73178L5.64018 7.23178L4.35982 8.76822ZM7.35982 9.73178L4.35982 12.2318L5.64018 13.7682L8.64018 11.2682L7.35982 9.73178Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Commandline;
