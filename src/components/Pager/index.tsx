import React, { FC } from 'react';
import classnames from 'classnames';
import Colors from 'gg-ukit/modules/colors';
import ArrowLeftAlt2 from 'gg-ukit/components/Icon/ArrowLeftAlt2';
import ArrowRightAlt2 from 'gg-ukit/components/Icon/ArrowRightAlt2';
import 'gg-ukit/components/Pager/pager.less';

import Link, { LinkType } from 'components/Link';

export const PAGE_TEMPLATE = '%PAGE%';

const getHref = (urlTemplate: string, page: number) => {
    return urlTemplate.replace(PAGE_TEMPLATE, `${page}`);
};

export interface PagerProps {
    selected: number;
    prev: boolean;
    start: number[];
    middle: number[];
    end: number[];
    next: boolean;
    urlTemplate: string;
}

const Pager: FC<PagerProps> = ({ selected, prev, start, middle, end, next, urlTemplate }) => {
    return (
        <div className="gg-pager">
            {prev && (
                <div className="gg-pager-arrow-left">
                    <a href={getHref(urlTemplate, selected - 1)}>
                        <ArrowLeftAlt2 color={Colors.Secondary} scale={2} />
                    </a>
                </div>
            )}
            {start.length > 0 && (
                <div className="gg-pager-extended-list">
                    {start.map((page) => (
                        <div key={page} className="gg-pager-item">
                            <Link href={getHref(urlTemplate, page)} type={LinkType.Secondary}>
                                {page}
                            </Link>
                        </div>
                    ))}
                    <div className="gg-pager-reduction">...</div>
                </div>
            )}
            {middle.length > 0 && (
                <div className="gg-pager-middle">
                    {middle.map((page) => (
                        <div
                            key={page}
                            className={classnames('gg-pager-item', { 'gg-pager-item_selected': page === selected })}
                        >
                            <Link
                                href={page !== selected ? getHref(urlTemplate, page) : null}
                                type={LinkType.Secondary}
                            >
                                {page}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            {end.length > 0 && (
                <div className="gg-pager-extended-list">
                    <div className="gg-pager-reduction">...</div>
                    {end.map((page, index) => (
                        <div key={page} className="gg-pager-item">
                            <Link key={page} href={getHref(urlTemplate, page)} type={LinkType.Secondary}>
                                {page}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            {next && (
                <div className="gg-pager-arrow-right">
                    <a href={getHref(urlTemplate, selected + 1)}>
                        <ArrowRightAlt2 color={Colors.Secondary} scale={2} />
                    </a>
                </div>
            )}
        </div>
    );
};

export default Pager;
