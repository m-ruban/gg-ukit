import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Share: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14H6ZM20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14H20ZM11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15H11ZM12 4L12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L12 4ZM6.29289 8.29289C5.90237 8.68342 5.90237 9.31658 6.29289 9.70711C6.68342 10.0976 7.31658 10.0976 7.70711 9.70711L6.29289 8.29289ZM16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L16.2929 9.70711ZM4 14V17H6V14H4ZM8 21H16V19H8V21ZM20 17V14H18V17H20ZM13 15V4H11V15H13ZM11.2929 3.29289L6.29289 8.29289L7.70711 9.70711L12.7071 4.70711L11.2929 3.29289ZM11.2929 4.70711L16.2929 9.70711L17.7071 8.29289L12.7071 3.29289L11.2929 4.70711ZM16 21C18.2091 21 20 19.2091 20 17H18C18 18.1046 17.1046 19 16 19V21ZM4 17C4 19.2091 5.79086 21 8 21V19C6.89543 19 6 18.1046 6 17H4Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Share;