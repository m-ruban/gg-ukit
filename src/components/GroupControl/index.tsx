import React, { FC, ReactNode } from 'react';
import 'components/GroupControl/groupControl.less';

interface GroupControlProps {
    children: ReactNode;
}

const GroupControl: FC<GroupControlProps> = ({ children }) => <div className="gg-group-control">{children}</div>;

export default GroupControl;
