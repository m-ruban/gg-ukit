import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const CursorHand: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.4286 3C10.2597 3 9.71429 3.66811 9.71429 4.74193V14.8125L6.97863 12.4475C6.22844 11.6828 5.26429 11.5381 4.47924 12.254C3.74652 12.9373 3.91015 13.9428 4.59055 14.6587L8.90014 20.2245C9.27893 20.7136 9.8628 21 10.4815 21L17.1092 21C18.0701 21 18.8953 20.3166 19.0742 19.3725L19.9346 14.8337C20.2661 13.3856 19.3065 11.9376 17.7538 11.5796L13.1429 10.3125V4.74193C13.1429 3.66811 12.58 3 11.4286 3Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default CursorHand;
