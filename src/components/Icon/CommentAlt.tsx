import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const CommentAlt: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 9H17M7 12H13M5.5 4H18.5C19.8807 4 21 5.11929 21 6.5V14.5C21 15.8807 19.8807 17 18.5 17H11L7.01658 20.4855C7.01012 20.4911 7 20.4866 7 20.478V17H5.5C4.11929 17 3 15.8807 3 14.5V6.5C3 5.11929 4.11929 4 5.5 4Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </IconWrapper>
);

export default CommentAlt;
