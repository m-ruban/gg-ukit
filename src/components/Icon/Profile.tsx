import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Profile: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg
            width={width * scale}
            height={height * scale}
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 13C16.3053 13.1659 21 14.3327 21 17.1188C21 18.9505 20.1227 20.6157 18.3675 21.1398C16.8511 21.5925 14.7107 22 12 22C9.28916 22 7.14882 21.5926 5.63246 21.1398C3.87739 20.6157 3 18.9505 3 17.1188C3 14.327 7.6978 13.1639 8 13M12 16C15.3764 16 18 10.8323 18 5.54093C18 3.07278 15.3583 1 12 1C8.64168 1 6 3.07278 6 5.54093C6 10.8323 8.62358 16 12 16Z"
                style={{ transform: `scale(${scale})` }}
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    </IconWrapper>
);

export default Profile;
