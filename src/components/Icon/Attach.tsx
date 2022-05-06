import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Attach: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.5564 12.6066L11.546 18.617C9.78861 20.3744 6.93937 20.3744 5.18201 18.617V18.617C3.42465 16.8596 3.42465 14.0104 5.18201 12.253L13.3137 4.12132C14.4853 2.94975 16.3848 2.94975 17.5564 4.12132V4.12132C18.728 5.29289 18.728 7.19239 17.5564 8.36396L9.42465 16.4957C8.83886 17.0815 7.88912 17.0815 7.30333 16.4957V16.4957C6.71754 15.9099 6.71754 14.9602 7.30333 14.3744L13.3137 8.36396"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default Attach;
