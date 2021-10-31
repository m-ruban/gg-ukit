import React, { FC, Fragment } from 'react';
import Link from 'components/Link';
import { LinkType } from 'components/Link';
import 'components/Breadcrumbs/breadcrumbs.less';

// TO DO change to Icon component
const NEXT_LINK = '>';

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
                {links.length - 1 !== index && <span className="gg-breadcrumbs-next">{NEXT_LINK}</span>}
            </Fragment>
        ))}
    </div>
);

export default Breadcrumbs;
