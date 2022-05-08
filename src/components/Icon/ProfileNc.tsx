import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const ProfileNc: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.04747 21.3446L6.76673 22.3044L6.76673 22.3044L7.04747 21.3446ZM16.9525 21.3446L16.6718 20.3848L16.6718 20.3848L16.9525 21.3446ZM15.5809 14.2601C15.0934 14.0006 14.4878 14.1855 14.2283 14.673C13.9689 15.1606 14.1538 15.7662 14.6413 16.0256L15.5809 14.2601ZM9.35807 16.026C9.84579 15.7668 10.0311 15.1614 9.77199 14.6737C9.51287 14.186 8.90744 14.0006 8.41971 14.2598L9.35807 16.026ZM5 18.281L6 18.281L5 18.281ZM12 17.4286L12 18.4286L12 17.4286ZM18.0641 13.4993C17.7876 13.9773 17.951 14.5891 18.429 14.8656C18.9071 15.1421 19.5188 14.9788 19.7953 14.5007L18.0641 13.4993ZM4.20465 14.5007C4.4812 14.9788 5.09292 15.1421 5.57098 14.8656C6.04904 14.5891 6.21241 13.9773 5.93586 13.4993L4.20465 14.5007ZM6.76673 22.3044C8.03385 22.675 9.79301 23 12 23V21C9.99013 21 8.41987 20.7041 7.32821 20.3848L6.76673 22.3044ZM12 23C14.2069 23 15.9661 22.675 17.2333 22.3044L16.6718 20.3848C15.5801 20.7041 14.0098 21 12 21V23ZM20 18.281C20 16.5999 18.5774 15.5948 17.6157 15.0812C17.0842 14.7973 16.555 14.5891 16.1555 14.4463C15.9549 14.3746 15.782 14.3177 15.6605 14.2775C15.5969 14.2565 15.5547 14.2424 15.5252 14.2321C15.4715 14.2132 15.5171 14.2261 15.5809 14.2601L14.6413 16.0256C14.7348 16.0754 14.8368 16.1101 14.8626 16.1191C14.9127 16.1367 14.9733 16.1568 15.0323 16.1763C15.1559 16.2172 15.3073 16.2671 15.4824 16.3297C15.8343 16.4554 16.2625 16.6258 16.6735 16.8454C17.5969 17.3385 18 17.8393 18 18.281H20ZM8.41971 14.2598C8.48421 14.2255 8.5306 14.2124 8.47647 14.2313C8.44699 14.2416 8.40489 14.2556 8.34132 14.2766C8.21983 14.3166 8.04702 14.3733 7.84635 14.4448C7.44681 14.5872 6.91737 14.7951 6.38557 15.0788C5.42282 15.5925 4 16.5979 4 18.281L6 18.281C6 17.837 6.4041 17.3358 7.32703 16.8434C7.73807 16.6241 8.16617 16.4541 8.51783 16.3287C8.69276 16.2664 8.84397 16.2167 8.96729 16.1761C9.02612 16.1567 9.08663 16.1367 9.13649 16.1193C9.1617 16.1105 9.26419 16.0758 9.35807 16.026L8.41971 14.2598ZM17.2333 22.3044C19.1468 21.7447 20 19.9789 20 18.281H18C18 19.3742 17.4884 20.1459 16.6718 20.3848L17.2333 22.3044ZM4 18.281C4 19.9789 4.8532 21.7447 6.76673 22.3044L7.32821 20.3848C6.51163 20.146 6 19.3742 6 18.281H4ZM12 18.4286C13.8494 18.4286 15.281 17.0594 16.1894 15.4468C17.1209 13.7933 17.6667 11.6288 17.6667 9.45975H15.6667C15.6667 11.3223 15.1921 13.1422 14.4469 14.4652C13.6785 15.8291 12.7767 16.4286 12 16.4286L12 18.4286ZM17.6667 9.45975C17.6667 8.13225 16.9405 6.99516 15.9127 6.22458C14.8832 5.45277 13.5011 5 12 5V7C13.1109 7 14.0621 7.33686 14.713 7.8248C15.3655 8.31397 15.6667 8.90676 15.6667 9.45975H17.6667ZM12 5C10.4989 5 9.11679 5.45277 8.08731 6.22458C7.05946 6.99516 6.33333 8.13225 6.33333 9.45975H8.33333C8.33333 8.90676 8.63453 8.31397 9.28701 7.8248C9.93785 7.33686 10.8891 7 12 7V5ZM6.33333 9.45975C6.33333 11.6288 6.87909 13.7933 7.81062 15.4468C8.71904 17.0594 10.1506 18.4286 12 18.4286L12 16.4286C11.2233 16.4286 10.3215 15.8291 9.55314 14.4652C8.80786 13.1422 8.33333 11.3223 8.33333 9.45975H6.33333ZM12 3C15.866 3 19 6.13401 19 10H21C21 5.02944 16.9706 1 12 1V3ZM12 1C7.02944 1 3 5.02944 3 10H5C5 6.13401 8.13401 3 12 3V1ZM19 10C19 11.2767 18.6591 12.4707 18.0641 13.4993L19.7953 14.5007C20.5617 13.1759 21 11.6376 21 10H19ZM5.93586 13.4993C5.34086 12.4707 5 11.2767 5 10H3C3 11.6376 3.4383 13.1759 4.20465 14.5007L5.93586 13.4993Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default ProfileNc;
