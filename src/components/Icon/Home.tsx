import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Home: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 10.9998L5.43078 18.1795C5.52583 19.7637 6.83832 20.9998 8.4254 20.9998H15.5746C17.1617 20.9998 18.4742 19.7637 18.5692 18.1795L19 10.9998M2 9.99978L10.7506 2.9993C11.481 2.41495 12.519 2.41495 13.2494 2.9993L22 9.99978M14 14.9998C14 16.1044 13.1046 16.9998 12 16.9998C10.8954 16.9998 10 16.1044 10 14.9998C10 13.8952 10.8954 12.9998 12 12.9998C13.1046 12.9998 14 13.8952 14 14.9998Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default Home;
