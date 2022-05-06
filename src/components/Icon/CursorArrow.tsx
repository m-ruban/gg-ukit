import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const CursorArrow: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.3338 8.62466C18.4008 8.57438 18.38 8.46889 18.2989 8.44786L5.16456 5.04266C5.09074 5.02353 5.02353 5.09074 5.04266 5.16456L8.44786 18.2989C8.46889 18.38 8.57438 18.4008 8.62466 18.3338L11.5 14.5L15.6464 18.6464C15.8417 18.8417 16.1583 18.8417 16.3536 18.6464L18.6464 16.3536C18.8417 16.1583 18.8417 15.8417 18.6464 15.6464L14.5 11.5L18.3338 8.62466Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default CursorArrow;
