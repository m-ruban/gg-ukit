import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const PlaneAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.09319 21.6272C8.04585 21.8166 8.18906 22 8.38423 22L10.7166 22C10.8292 22 10.9323 21.937 10.9836 21.8368L15 14L19.7 14.1501C20.9656 14.1501 23 13.2538 23 12C23 10.7462 20.9656 10 19.7 10L15 10L10.9836 2.16317C10.9323 2.063 10.8292 2 10.7166 2L8.38423 2C8.18906 2 8.04585 2.18342 8.09319 2.37276L9.84468 9.37873C9.92358 9.69431 9.6849 10 9.35961 10L5 10L4.13483 7.74797C4.0903 7.63206 3.97896 7.55556 3.85478 7.55556L1.5 7.55556C1.22386 7.55556 1 7.77941 1 8.05556L1 12L0.999999 15.9444C0.999999 16.2206 1.22386 16.4444 1.5 16.4444L3.85478 16.4444C3.97896 16.4444 4.0903 16.3679 4.13483 16.252L5 14L9.35961 14C9.6849 14 9.92358 14.3057 9.84468 14.6213L8.09319 21.6272Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default PlaneAlt;
