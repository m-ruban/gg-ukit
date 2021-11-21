import React, { useRef, useCallback, memo, FC, ComponentPropsWithoutRef } from 'react';
import ReactDOM from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import Colors from 'modules/colors';
import Utils from 'components/Modal/utils';
import Decline from 'components/Icon/Decline';

import 'components/Modal/modal.less';

interface ModalProps extends ComponentPropsWithoutRef<'div'> {
    onClose: () => void;
    backgroundClick?: boolean;
    visible?: boolean;
    host?: HTMLElement;
    disableScroll?: boolean;
}

const Modal: FC<ModalProps> = ({
    onClose,
    children,
    visible = false,
    backgroundClick = true,
    disableScroll = false,
    host,
    ...modalProps
}) => {
    const isClosable = useRef(true);
    const handleClose = useCallback(() => {
        if (isClosable.current) {
            onClose();
            return;
        }
        isClosable.current = true;
    }, [onClose]);
    const handleClick = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        event.stopPropagation();
        isClosable.current = true;
    }, []);
    const setNonClosable = useCallback(() => {
        isClosable.current = false;
    }, []);
    console.log(disableScroll);

    return ReactDOM.createPortal(
        <CSSTransition
            appear
            in={visible}
            timeout={150}
            mountOnEnter
            unmountOnExit
            onEntering={disableScroll ? Utils.disableScroll : () => {}}
            onExited={disableScroll ? Utils.enableScroll : () => {}}
            classNames={{
                enter: 'gg-modal-overlay',
                enterActive: 'gg-modal-overlay gg-modal-overlay_visible',
                enterDone: 'gg-modal-overlay gg-modal-overlay_visible',
                exit: 'gg-modal-overlay',
                exitActive: 'gg-modal-overlay',
            }}
        >
            <div>
                <div
                    className="gg-modal-container gg-modal-container_visible"
                    onClick={backgroundClick ? handleClose : () => {}}
                >
                    <div
                        {...modalProps}
                        onMouseDown={setNonClosable}
                        onMouseUp={setNonClosable}
                        className="gg-modal"
                        onClick={handleClick}
                        onTouchMove={handleClick}
                    >
                        {children}
                    </div>
                    <div className="gg-modal-close-button">
                        <Decline color={Colors.Promo} scale={2} />
                    </div>
                </div>
            </div>
        </CSSTransition>,
        host || document.body
    );
};

export default memo(Modal);
