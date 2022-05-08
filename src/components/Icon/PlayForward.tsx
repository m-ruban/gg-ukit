import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const PlayForward: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 8.12075V15.8793C11 16.6064 11.4435 17 11.9689 17C12.235 17 12.467 16.9133 12.7331 16.7665L19.3245 12.9706C19.7885 12.7038 20 12.3836 20 11.9967C20 11.6164 19.7885 11.2962 19.3245 11.0294L12.7331 7.24016C12.4602 7.08672 12.235 7 11.9689 7C11.4367 7 11 7.3936 11 8.12075Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
            <path
                d="M2 8.12075V15.8793C2 16.6064 2.44352 17 2.96892 17C3.23503 17 3.46702 16.9133 3.73313 16.7665L10.3245 12.9706C10.7885 12.7038 11 12.3836 11 11.9967C11 11.6164 10.7885 11.2962 10.3245 11.0294L3.73313 7.24016C3.4602 7.08672 3.23503 7 2.96892 7C2.43669 7 2 7.3936 2 8.12075Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default PlayForward;
