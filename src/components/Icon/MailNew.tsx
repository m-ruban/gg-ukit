import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 26;
const height = 24;

const MailNew: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.58579 18.4142C2.94772 18.7761 3.44772 19 4 19H20C20.5523 19 21.0523 18.7761 21.4142 18.4142M2.58579 18.4142C2.22386 18.0523 2 17.5523 2 17V7C2 5.89543 2.89543 5 4 5H16M2.58579 18.4142L9 12M2.58579 18.4142L2 19M21.4142 18.4142C21.7761 18.0523 22 17.5523 22 17V11M21.4142 18.4142L22 19M21.4142 18.4142L15 12M3 6L11.3356 13.4095C11.7145 13.7462 12.2855 13.7462 12.6644 13.4095L17.2639 9.321M24 6C24 7.65685 22.6569 9 21 9C19.3431 9 18 7.65685 18 6C18 4.34315 19.3431 3 21 3C22.6569 3 24 4.34315 24 6Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default MailNew;
