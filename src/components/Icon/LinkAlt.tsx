import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const LinkAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.46436 11.2923L6.34303 13.4136C5.17146 14.5852 5.17146 16.4847 6.34303 17.6563C7.51461 18.8278 9.41428 18.8277 10.5858 17.6561L12.707 15.5349M11.2928 8.46387L13.4141 6.34255C14.5857 5.17097 16.4852 5.17097 17.6567 6.34255C18.8283 7.51412 18.8281 9.41379 17.6566 10.5854L15.5354 12.7065M9.17142 14.8278L14.8283 9.17099"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default LinkAlt;
