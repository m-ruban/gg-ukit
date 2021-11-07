import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import 'components/Link/link.less';

export enum LinkType {
    Secondary = 'secondary',
    Promo = 'promo',
}

interface LinkProp {
    href: string;
    type?: LinkType;
}

const Link: FC<LinkProp> = ({ href, type, children, ...props }) => (
    <a className={classnames('gg-link', { [`gg-link_${type}`]: type })} href={href} {...props}>
        {children}
    </a>
);

export default Link;