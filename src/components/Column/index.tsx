import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import 'gg-ukit/components/Column/column.less';

export interface ColumnProps {
    l?: number;
    m?: number;
    s?: number;
    xs?: number;
    container?: boolean;
    children: ReactNode;
}

const Column: FC<ColumnProps> = ({ l = 12, m = 12, s = 6, xs = 4, container, children }) => (
    <div
        className={classnames(
            'gg-column',
            { 'gg-column_container': container },
            { [`gg-column-xs_${xs}`]: xs },
            { [`gg-column-s_${s}`]: s },
            { [`gg-column-m_${m}`]: m },
            { [`gg-column-l_${l}`]: l }
        )}
    >
        {children}
    </div>
);

export default Column;
