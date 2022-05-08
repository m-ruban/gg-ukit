import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ProfileCircle: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.6673 15.4303C14.1316 15.2959 13.5884 15.6213 13.4541 16.157C13.3198 16.6927 13.6451 17.2359 14.1808 17.3702L14.6673 15.4303ZM9.81917 17.3702C10.3549 17.2359 10.6802 16.6927 10.5459 16.157C10.4116 15.6213 9.86839 15.2959 9.33269 15.4303L9.81917 17.3702ZM12 17.6667L12 16.6667L12 17.6667ZM21 12C21 16.9706 16.9706 21 12 21V23C18.0751 23 23 18.0751 23 12H21ZM12 21C7.02944 21 3 16.9706 3 12H1C1 18.0751 5.92487 23 12 23V21ZM3 12C3 7.02944 7.02944 3 12 3V1C5.92487 1 1 5.92487 1 12H3ZM12 3C16.9706 3 21 7.02944 21 12H23C23 5.92487 18.0751 1 12 1V3ZM17 19.5139V20H19V19.5139H17ZM7 20V19.5139H5V20H7ZM14.1808 17.3702C15.1254 17.6071 15.8677 17.9803 16.3525 18.3943C16.8365 18.8077 17 19.1982 17 19.5139H19C19 18.4395 18.4287 17.5373 17.6513 16.8734C16.8747 16.2102 15.829 15.7216 14.6673 15.4303L14.1808 17.3702ZM9.33269 15.4303C8.17103 15.7216 7.12534 16.2102 6.34872 16.8734C5.57133 17.5373 5 18.4395 5 19.5139H7C7 19.1982 7.16353 18.8077 7.64755 18.3943C8.13234 17.9803 8.87462 17.6071 9.81917 17.3702L9.33269 15.4303ZM12 18.6667C13.8317 18.6667 15.2173 17.238 16.0824 15.6123C16.9767 13.9317 17.5 11.7333 17.5 9.53183H15.5C15.5 11.4459 15.0394 13.3149 14.3168 14.6728C13.565 16.0857 12.7007 16.6667 12 16.6667L12 18.6667ZM17.5 9.53183C17.5 6.85675 14.8432 5 12 5V7C14.1943 7 15.5 8.36758 15.5 9.53183H17.5ZM12 5C9.15681 5 6.5 6.85675 6.5 9.53183H8.5C8.5 8.36758 9.80571 7 12 7V5ZM6.5 9.53183C6.5 11.7333 7.02326 13.9317 7.91759 15.6123C8.78267 17.238 10.1683 18.6667 12 18.6667L12 16.6667C11.2993 16.6667 10.435 16.0857 9.68317 14.6728C8.96059 13.3149 8.5 11.4459 8.5 9.53183H6.5Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default ProfileCircle;
