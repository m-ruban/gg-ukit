import React, { FC, ReactNode } from 'react';
import 'gg-ukit/components/GroupControl/groupControl.less';

export interface GroupControlProps {
    children: ReactNode;
}

const GroupControl: FC<GroupControlProps> = ({ children }) => <div className="gg-group-control">{children}</div>;

export default GroupControl;
