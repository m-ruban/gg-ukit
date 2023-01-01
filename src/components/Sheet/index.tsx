import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import Colors from 'gg-ukit/modules/colors';
import Decline from 'gg-ukit/components/Icon/Decline';

import 'gg-ukit/components/Sheet/sheet.less';

export enum SheetPositionType {
    Left = 'left',
    Right = 'right',
}

export interface SheetProps {
    header: ReactNode;
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
    footer?: ReactNode;
    positionType?: SheetPositionType;
}

const Sheet: FC<SheetProps> = ({
    children,
    header,
    visible,
    onClose,
    footer = null,
    positionType = SheetPositionType.Left,
}) => {
    return ReactDOM.createPortal(
        <CSSTransition
            appear
            in={visible}
            timeout={250}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: `gg-sheet gg-sheet_${positionType}`,
                enterActive: `gg-sheet gg-sheet_${positionType} gg-sheet_open`,
                enterDone: `gg-sheet gg-sheet_${positionType} gg-sheet_open`,
                exitActive: `gg-sheet gg-sheet_${positionType} gg-sheet_close-${positionType}`,
                exit: `gg-sheet gg-sheet_${positionType} gg-sheet_close-${positionType}`,
            }}
        >
            <div className={`gg-sheet gg-sheet_${positionType}`}>
                <div>
                    <div className="gg-sheet-header">{header}</div>
                    <div className="gg-sheet-close-button" onClick={onClose}>
                        <Decline color={Colors.TertiaryDimmed} scale={2} />
                    </div>
                </div>
                <div className="gg-sheet-content">{children}</div>
                <div className="gg-sheet-footer">{footer}</div>
            </div>
        </CSSTransition>,
        document.body
    );
};

export default Sheet;
