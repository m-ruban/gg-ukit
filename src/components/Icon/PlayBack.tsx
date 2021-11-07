import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const PlayBack: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 8.12075V15.8793C13 16.6064 12.5565 17 12.0311 17C11.765 17 11.533 16.9133 11.2669 16.7665L4.67551 12.9706C4.21152 12.7038 4 12.3836 4 11.9967C4 11.6164 4.21152 11.2962 4.67551 11.0294L11.2669 7.24016C11.5398 7.08672 11.765 7 12.0311 7C12.5633 7 13 7.3936 13 8.12075Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
            <path
                d="M22 8.12075V15.8793C22 16.6064 21.5565 17 21.0311 17C20.765 17 20.533 16.9133 20.2669 16.7665L13.6755 12.9706C13.2115 12.7038 13 12.3836 13 11.9967C13 11.6164 13.2115 11.2962 13.6755 11.0294L20.2669 7.24016C20.5398 7.08672 20.765 7 21.0311 7C21.5633 7 22 7.3936 22 8.12075Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default PlayBack;
