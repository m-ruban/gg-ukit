import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const CursorHandTap: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 5C7 2.79086 9.01472 1 11.5 1C13.9853 1 16 2.79086 16 5M11.4286 5C10.2597 5 9.71429 5.66811 9.71429 6.74193V16.8125L6.97863 14.4475C6.22844 13.6828 5.26429 13.5381 4.47924 14.254C3.74652 14.9373 3.91015 15.9428 4.59055 16.6587L8.90014 22.2245C9.27893 22.7136 9.8628 23 10.4815 23L17.1092 23C18.0701 23 18.8953 22.3166 19.0742 21.3725L19.9346 16.8337C20.2661 15.3856 19.3065 13.9376 17.7538 13.5796L13.1429 12.3125V6.74193C13.1429 5.66811 12.58 5 11.4286 5Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default CursorHandTap;
