import React, { FC, ReactNode } from 'react';
import 'components/List/list.less';

interface ListProps {
    children: ReactNode;
}

const List: FC<ListProps> = ({ children }) => <ul className="gg-list">{children}</ul>;

export default List;
