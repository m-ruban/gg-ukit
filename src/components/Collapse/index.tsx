import React, { FC, ReactNode, useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { H3 } from 'gg-ukit/components/Header';
import ArrowDown from 'gg-ukit/components/Icon/ArrowDown';
import ArrowUp from 'gg-ukit/components/Icon/ArrowUp';
import Colors from 'gg-ukit/modules/colors';
import 'gg-ukit/components/Collapse/collapse.less';

export interface CollapseProps {
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
            <CSSTransition
                in={show}
                timeout={300}
                classNames={{
                    enter: 'gg-collapse-item',
                    enterActive: 'gg-collapse-item gg-collapse-item_visible',
                    enterDone: 'gg-collapse-item gg-collapse-item_visible',
                }}
            >
                <>{show && <div>{children}</div>}</>
            </CSSTransition>
        </div>
    );
};

export default Collapse;
