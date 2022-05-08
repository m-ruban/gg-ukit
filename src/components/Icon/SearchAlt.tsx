import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const SearchAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                style={{ transform: `scale(${scale})` }}
                d="M14.0588 14.0588L16.5 16.5M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM15.2353 11.1176C15.2353 13.3918 13.3918 15.2353 11.1176 15.2353C8.84353 15.2353 7 13.3918 7 11.1176C7 8.84353 8.84353 7 11.1176 7C13.3918 7 15.2353 8.84353 15.2353 11.1176Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default SearchAlt;
