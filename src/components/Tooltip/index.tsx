import React, { FC, ReactNode, useState, useRef, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import 'gg-ukit/components/Tooltip/tooltip.less';

export interface TooltipProps {
    children: ReactNode;
    view: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ children, view }) => {
    const [show, setShow] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);
    const wrapperRef = useRef<HTMLSpanElement>(null);

    const updateTipPosition = useCallback(() => {
        const tooltip = tooltipRef.current;
        const arrow = arrowRef.current;
        const wrapper = wrapperRef.current;
        const tooltipWidth = wrapper.offsetLeft + tooltip.offsetWidth;
        const clientWidth = window.document.documentElement.clientWidth;
        if (tooltipWidth > clientWidth) {
            tooltip.style.left = 'auto';
            tooltip.style.right = '0px';
            arrow.style.left = 'auto';
            arrow.style.right = '10px';
        } else {
            tooltip.style.left = '0px';
            tooltip.style.right = 'auto';
            arrow.style.left = '10px';
            arrow.style.right = 'auto';
        }
    }, []);

    useEffect(() => {
        if (show) {
            updateTipPosition();
        }
    }, [updateTipPosition, show]);

    return (
        <span
            ref={wrapperRef}
            className="gg-tooltip-wrapper"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div ref={tooltipRef} className={classnames('gg-tooltip', { 'gg-tooltip_visible': show })}>
                <div>{view}</div>
                <span ref={arrowRef} className="gg-tooltip-arrow" />
            </div>
            <span className="gg-tooltip-link">{children}</span>
        </span>
    );
};

export default Tooltip;
