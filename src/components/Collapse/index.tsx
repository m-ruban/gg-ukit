import React, { FC, ReactNode, useState } from 'react';
import classnames from 'classnames';
import { H3 } from 'components/Header';
import ArrowDown from 'components/Icon/ArrowDown';
import ArrowUp from 'components/Icon/ArrowUp';
import Colors from 'modules/colors';
import 'components/Collapse/collapse.less';

interface CollapseProps {
    title: string;
    children: ReactNode;
    defaultShow?: boolean;
}

const Collapse: FC<CollapseProps> = ({ title, children, defaultShow = false }) => {
    const [show, setShow] = useState<boolean>(defaultShow);
    return (
        <div>
            <div
                className="gg-collapse-title"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <H3 title={title} />
                <span className="gg-collapse-title_icon">
                    {!show && <ArrowDown color={Colors.Secondary} />}
                    {show && <ArrowUp color={Colors.Secondary} />}
                </span>
            </div>
            <div className={classnames('gg-collapse-item ', { 'gg-collapse-item_show': show })}>{children}</div>
        </div>
    );
};

export default Collapse;
