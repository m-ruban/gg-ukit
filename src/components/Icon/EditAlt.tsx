import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const EditAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 10.9998L9.08787 20.912C9.03161 20.9682 8.9553 20.9998 8.87574 20.9998H3.3C3.13432 20.9998 3 20.8655 3 20.6999L3 15.1241C3 15.0445 3.03161 14.9682 3.08787 14.912L13 4.99985M19 10.9998L21.2929 8.70696C21.6834 8.31643 21.6834 7.68327 21.2929 7.29274L16.7071 2.70696C16.3166 2.31643 15.6834 2.31643 15.2929 2.70696L13 4.99985M19 10.9998L13 4.99985"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default EditAlt;
