import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Bookmark: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.2704 16.6738L12.8111 15.8326L12.2704 16.6738ZM11.7296 16.6738L11.1889 15.8326L11.7296 16.6738ZM5.77038 20.5048L6.31114 21.3459L5.77038 20.5048ZM18.2296 20.5048L17.6889 21.3459L18.2296 20.5048ZM7.5 5H16.5V3H7.5V5ZM18 6.5V20.0842H20V6.5H18ZM6 20.0842V6.5H4V20.0842H6ZM18.7704 19.6636L12.8111 15.8326L11.7296 17.515L17.6889 21.3459L18.7704 19.6636ZM11.1889 15.8326L5.22962 19.6636L6.31114 21.3459L12.2704 17.515L11.1889 15.8326ZM12.8111 15.8326C12.317 15.515 11.683 15.515 11.1889 15.8326L12.2704 17.515C12.1057 17.6209 11.8943 17.6209 11.7296 17.515L12.8111 15.8326ZM4 20.0842C4 21.2709 5.31287 21.9877 6.31114 21.3459L5.22962 19.6636C5.56238 19.4497 6 19.6886 6 20.0842H4ZM18 20.0842C18 19.6886 18.4376 19.4497 18.7704 19.6636L17.6889 21.3459C18.6871 21.9877 20 21.2709 20 20.0842H18ZM16.5 5C17.3284 5 18 5.67157 18 6.5H20C20 4.567 18.433 3 16.5 3V5ZM7.5 3C5.567 3 4 4.567 4 6.5H6C6 5.67157 6.67157 5 7.5 5V3Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Bookmark;
