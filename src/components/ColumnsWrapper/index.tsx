import React, { FC, ReactNode } from 'react';
import 'gg-ukit/components/ColumnsWrapper/columnsWrapper.less';

interface ColumnsWrapperProps {
    children: ReactNode;
}

const ColumnsWrapper: FC<ColumnsWrapperProps> = ({ children }) => <div className="gg-columns-wrapper">{children}</div>;

export default ColumnsWrapper;
