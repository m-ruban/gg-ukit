import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ArrowRefresh: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.231 2.96875L15.731 6.46875L12.231 9.96875M19 13.0001C19 16.8661 15.866 20.0001 12 20.0001C8.13401 20.0001 5 16.8661 5 13.0001C5 9.13414 8.13401 6.00014 12 6.00014C12.8181 6.00014 13.75 6.00014 14.9167 6.58347"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default ArrowRefresh;
