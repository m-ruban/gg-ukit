import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const HomeCharge: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 10.9998L5.43078 18.1795C5.52583 19.7637 6.83832 20.9998 8.4254 20.9998H15.5746C17.1617 20.9998 18.4742 19.7637 18.5692 18.1795L19 10.9998M12 9.49978L10 12.9998H14L12.5 16.4998M2 9.99978L10.7506 2.9993C11.481 2.41495 12.519 2.41495 13.2494 2.9993L22 9.99978"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </IconWrapper>
);

export default HomeCharge;
