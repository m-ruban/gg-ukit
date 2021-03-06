import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Play: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.07735 19C6.43094 19 6 18.5247 6 17.7815V6.21852C6 5.47531 6.43094 5 7.07735 5C7.42749 5 7.71478 5.12099 8.08287 5.31975L18.0214 10.8593C18.7396 11.2568 19 11.542 19 12C19 12.458 18.7396 12.7432 18.0214 13.1407L8.08287 18.6802C7.71478 18.879 7.42749 19 7.07735 19Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default Play;
