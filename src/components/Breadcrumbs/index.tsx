import React, { FC, Fragment } from 'react';
import Link from 'components/Link';
import { LinkType } from 'components/Link';
import ArrowRight from 'components/Icon/ArrowRight';
import Colors from 'modules/colors';
import 'components/Breadcrumbs/breadcrumbs.less';

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
            <Fragment key={`${href}_${index}`}>
                <Link href={href} type={linkType}>
                    {title}
                </Link>
                {links.length - 1 !== index && <ArrowRight color={Colors.Secondary} />}
            </Fragment>
        ))}
    </div>
);

export default Breadcrumbs;
