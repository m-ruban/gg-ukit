import React, { FC } from 'react';
import Link, { LinkType } from 'gg-ukit/components/Link';
import ArrowRight from 'gg-ukit/components/Icon/ArrowRight';
import HomeAlt from 'gg-ukit/components/Icon/HomeAlt';
import Colors from 'gg-ukit/modules/colors';
import 'gg-ukit/components/Breadcrumbs/breadcrumbs.less';

export interface BreadcrumbProp {
    title: string;
    href: string;
}

export interface BreadcrumbsProp {
    links: BreadcrumbProp[];
    linkType?: LinkType;
}

const Breadcrumbs: FC<BreadcrumbsProp> = ({ links, linkType }: BreadcrumbsProp) => (
    <div className="gg-breadcrumbs">
        {links.map(({ href, title }, index) => (
            <div key={`${href}_${index}`} className="gg-breadcrumbs-item">
                {index === 0 && (
                    <span className="gg-breadcrumbs-home">
                        <HomeAlt color={Colors.Secondary} />
                    </span>
                )}
                {index !== 0 && <ArrowRight color={Colors.Secondary} />}
                <Link href={href} type={linkType}>
                    {title}
                </Link>
            </div>
        ))}
    </div>
);

export default Breadcrumbs;
