import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const SearchAdd: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.5 16.544L20.5 20.519M10.5 10.5816V8.09721M10.5 10.5816V13.0659M10.5 10.5816H13M10.5 10.5816H8M19 10.5816C19 15.2466 15.1944 19.0284 10.5 19.0284C5.80558 19.0284 2 15.2466 2 10.5816C2 5.91653 5.80558 2.13477 10.5 2.13477C15.1944 2.13477 19 5.91653 19 10.5816Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default SearchAdd;
