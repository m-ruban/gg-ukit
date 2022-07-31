import React, { FC, MouseEvent, ReactNode, useCallback, useRef } from 'react';

import 'gg-ukit/components/Scroller/scroller.less';

const SLIDE_SPEED = 1.2;

interface ScrollerProps {
    children: ReactNode;
}

const ACTIVE_CLASS = 'gg-scroller_active';
const DISABLE_CLASS = 'gg-scroller_disable-events';

const Scroller: FC<ScrollerProps> = ({ children }) => {
    const list = useRef<HTMLDivElement>(null);
    const down = useRef<boolean>(false);
    const start = useRef<number>(0);
    const left = useRef<number>(0);

    const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
        down.current = true;
        start.current = e.pageX - list.current.offsetLeft;
        left.current = list.current.scrollLeft;
        list.current.classList.add(ACTIVE_CLASS);
    }, []);

    const onMouseLeaveOrUp = useCallback(() => {
        down.current = false;
        list.current.classList.remove(ACTIVE_CLASS, DISABLE_CLASS);
    }, []);

    const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!down.current) {
            return;
        }
        list.current.classList.remove(ACTIVE_CLASS);
        list.current.classList.add(DISABLE_CLASS);
        e.preventDefault();
        const x = e.pageX - list.current.offsetLeft;
        list.current.scrollLeft = left.current - (x - start.current) * SLIDE_SPEED;
    }, []);

    return (
        <div
            ref={list}
            className="gg-scroller"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeaveOrUp}
            onMouseUp={onMouseLeaveOrUp}
            onMouseMove={onMouseMove}
        >
            {children}
        </div>
    );
};

export default Scroller;
