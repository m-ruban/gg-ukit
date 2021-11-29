import React, { FC } from 'react';
import classnames from 'classnames';
import Colors from 'modules/colors';
import ArrowLeftAlt2 from 'components/Icon/ArrowLeftAlt2';
import ArrowRightAlt2 from 'components/Icon/ArrowRightAlt2';
import 'components/Pager/pager.less';

const PAGE_PARAM = 'page';

const getHref = (pathname: string, search: string, page: number) => {
    const url = new URL(pathname + search);
    url.searchParams.append(PAGE_PARAM, `${page}`);
    return url.href;
};

interface PagerProps {
    selected: number;
    prev: boolean;
    start: number[];
    middle: number[];
    end: number[];
    next: boolean;
    pathname: string;
    search: string;
}

const Pager: FC<PagerProps> = ({ selected, prev, start, middle, end, next, pathname, search }) => {
    return (
        <div className="gg-pager">
            {prev && (
                <a href={getHref(pathname, search, selected - 1)} className="gg-pager-arrow">
                    <ArrowLeftAlt2 color={Colors.Secondary} scale={2} />
                </a>
            )}
            {start.length > 0 && (
                <div className="gg-pager-extended-list">
                    {start.map((page) => (
                        <a href={getHref(pathname, search, page)} className="gg-pager-item" key={page}>
                            {page}
                        </a>
                    ))}
                    <a className="gg-pager-reduction">...</a>
                </div>
            )}
            {middle.length > 0 &&
                middle.map((page) => (
                    <a
                        key={page}
                        href={page !== selected ? getHref(pathname, search, page) : null}
                        className={classnames('gg-pager-item', { 'gg-pager-item_selected': page === selected })}
                    >
                        {page}
                    </a>
                ))}
            {end.length > 0 && (
                <div className="gg-pager-extended-list">
                    <a className="gg-pager-reduction">...</a>
                    {end.map((page, index) => (
                        <a key={page} className="gg-pager-item" href={getHref(pathname, search, page)}>
                            {page}
                        </a>
                    ))}
                </div>
            )}
            {next && (
                <a href={getHref(pathname, search, selected + 1)} className="gg-pager-arrow gg-pager-arrow_right">
                    <ArrowRightAlt2 color={Colors.Secondary} scale={2} />
                </a>
            )}
        </div>
    );
};

export default Pager;
