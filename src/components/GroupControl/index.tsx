import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import 'gg-ukit/components/GroupControl/groupControl.less';

export interface GroupControlProps {
    children: ReactNode;
    rounded?: boolean;
}

const GroupControl: FC<GroupControlProps> = ({ children, rounded }) => {
    return <div className={classnames('gg-group-control', { 'gg-group-control_rounded': rounded })}>{children}</div>;
};

export default GroupControl;
