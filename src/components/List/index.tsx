import React, { FC, ReactNode } from 'react';
import 'gg-ukit/components/List/list.less';

export interface ListProps {
    children: ReactNode;
}

const List: FC<ListProps> = ({ children }) => <ul className="gg-list">{children}</ul>;

export default List;
