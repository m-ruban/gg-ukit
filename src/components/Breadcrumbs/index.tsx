import React, { FC } from 'react';
import Link from 'components/Link';
import { LinkType } from 'components/Link';
import ArrowRight from 'components/Icon/ArrowRight';
import HomeAlt from 'components/Icon/HomeAlt';
import Colors from 'modules/colors';
import 'gg-ukit/components/Breadcrumbs/breadcrumbs.less';

interface BreadcrumbProp {
    title: string;
    href: string;
}

interface BreadcrumbsProp {
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
                    <span className="gg-breadcrumbs-link">{title}</span>
                </Link>
            </div>
        ))}
    </div>
);

export default Breadcrumbs;
