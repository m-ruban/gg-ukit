import React, { FC } from 'react';
import IconWrapper, { IconProps } from 'gg-ukit/components/Icon/IconWrapper';

const width = 24;
const height = 24;

const Link: FC<IconProps> = ({ color, scale = 1 }) => (
    <IconWrapper scale={scale}>
        <svg width={width * scale} height={height * scale} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.0486 10.8668C16.6581 11.2573 16.6581 11.8905 17.0486 12.281C17.4391 12.6715 18.0723 12.6715 18.4628 12.281L17.0486 10.8668ZM18.1421 11.1876L17.435 10.4804L17.435 10.4804L18.1421 11.1876ZM12.733 5.77846L12.0259 5.07136L12.0259 5.07136L12.733 5.77846ZM9.8316 8.67987L10.5387 9.38697L10.5387 9.38697L9.8316 8.67987ZM10.0941 14.5992C10.4846 14.9897 11.1178 14.9897 11.5083 14.5992C11.8988 14.2087 11.8988 13.5755 11.5083 13.185L10.0941 14.5992ZM6.87193 13.0538C7.26246 12.6633 7.26246 12.0301 6.87193 11.6396C6.48141 11.2491 5.84824 11.2491 5.45772 11.6396L6.87193 13.0538ZM5.77846 12.7331L5.07136 12.026L5.07136 12.026L5.77846 12.7331ZM11.1876 18.1421L10.4804 17.435L10.4804 17.435L11.1876 18.1421ZM14.089 15.2407L14.7961 15.9479L14.7961 15.9479L14.089 15.2407ZM14.089 10.9981L14.7961 10.291L14.7961 10.291L14.089 10.9981ZM13.8265 9.32141C13.436 8.93089 12.8028 8.93089 12.4123 9.32141C12.0217 9.71193 12.0217 10.3451 12.4123 10.7356L13.8265 9.32141ZM5.77846 18.1421L5.07135 18.8493L5.07135 18.8493L5.77846 18.1421ZM18.4628 12.281L18.8492 11.8947L17.435 10.4804L17.0486 10.8668L18.4628 12.281ZM12.0259 5.07136L9.12449 7.97276L10.5387 9.38697L13.4401 6.48557L12.0259 5.07136ZM9.12449 13.6296L10.0941 14.5992L11.5083 13.185L10.5387 12.2154L9.12449 13.6296ZM9.12449 7.97276C7.56239 9.53486 7.56239 12.0675 9.12449 13.6296L10.5387 12.2154C9.75766 11.4344 9.75766 10.168 10.5387 9.38697L9.12449 7.97276ZM18.8492 5.07136C16.965 3.18715 13.9101 3.18715 12.0259 5.07136L13.4401 6.48557C14.5433 5.38241 16.3318 5.38241 17.435 6.48557L18.8492 5.07136ZM18.8492 11.8947C20.7334 10.0105 20.7334 6.95556 18.8492 5.07136L17.435 6.48557C18.5381 7.58872 18.5381 9.37729 17.435 10.4804L18.8492 11.8947ZM5.45772 11.6396L5.07136 12.026L6.48557 13.4402L6.87193 13.0538L5.45772 11.6396ZM11.8947 18.8493L14.7961 15.9479L13.3818 14.5336L10.4804 17.435L11.8947 18.8493ZM14.7961 10.291L13.8265 9.32141L12.4123 10.7356L13.3818 11.7052L14.7961 10.291ZM14.7961 15.9479C16.3582 14.3858 16.3582 11.8531 14.7961 10.291L13.3818 11.7052C14.1629 12.4863 14.1629 13.7526 13.3818 14.5336L14.7961 15.9479ZM5.07135 18.8493C6.95556 20.7335 10.0105 20.7335 11.8947 18.8493L10.4804 17.435C9.37729 18.5382 7.58872 18.5382 6.48557 17.435L5.07135 18.8493ZM5.07136 12.026C3.18715 13.9102 3.18715 16.9651 5.07135 18.8493L6.48557 17.435C5.38241 16.3319 5.38241 14.5433 6.48557 13.4402L5.07136 12.026Z"
                style={{ transform: `scale(${scale})` }}
                fill={color}
            />
        </svg>
    </IconWrapper>
);

export default Link;
