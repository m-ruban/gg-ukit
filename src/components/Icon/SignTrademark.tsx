import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const SignTrademark: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 15C6 15.5523 6.44772 16 7 16C7.55228 16 8 15.5523 8 15H6ZM5 8C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10V8ZM9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8V10ZM12 9L12.7071 8.29289C12.4211 8.0069 11.991 7.92134 11.6173 8.07612C11.2436 8.2309 11 8.59554 11 9H12ZM11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15H11ZM15 12L14.2929 12.7071C14.6834 13.0976 15.3166 13.0976 15.7071 12.7071L15 12ZM18 9H19C19 8.59554 18.7564 8.2309 18.3827 8.07612C18.009 7.92134 17.5789 8.0069 17.2929 8.29289L18 9ZM17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15H17ZM12 22C6.47715 22 2 17.5228 2 12H0C0 18.6274 5.37258 24 12 24V22ZM22 12C22 17.5228 17.5228 22 12 22V24C18.6274 24 24 18.6274 24 12H22ZM12 2C17.5228 2 22 6.47715 22 12H24C24 5.37258 18.6274 0 12 0V2ZM12 0C5.37258 0 0 5.37258 0 12H2C2 6.47715 6.47715 2 12 2V0ZM6 9V15H8V9H6ZM5 10H7V8H5V10ZM7 10H9V8H7V10ZM11 9V15H13V9H11ZM11.2929 9.70711L14.2929 12.7071L15.7071 11.2929L12.7071 8.29289L11.2929 9.70711ZM15.7071 12.7071L18.7071 9.70711L17.2929 8.29289L14.2929 11.2929L15.7071 12.7071ZM17 9V15H19V9H17Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default SignTrademark;