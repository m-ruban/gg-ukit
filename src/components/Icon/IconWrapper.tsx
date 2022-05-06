import React, { FC, ReactNode } from 'react';
import 'gg-ukit/components/Icon/IconWrapper.less';

type scaleKinds = 1 | 2;

export interface IconProps {
    scale?: scaleKinds;
    color: string;
}

interface IconWrapperProps {
    children: ReactNode;
    scale: scaleKinds;
}

const IconWrapper: FC<IconWrapperProps> = ({ children, scale }) => (
    <span className={`gg-icon gg-icon_x${scale}`}>{children}</span>
);

export default IconWrapper;
