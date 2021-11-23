import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import 'components/Button/button.less';

export enum ButtonKind {
    Secondary = 'secondary',
    Dimmed = 'dimmed',
    Promo = 'promo',
}

interface ButtonProps {
    children?: ReactNode;
    icon?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    kind?: ButtonKind;
    rounded?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick = () => {}, kind, rounded, icon, ...btnProps }) => (
    <button
        className={classnames(
            'gg-button',
            { [`gg-button_${kind}`]: kind },
            { 'gg-button_rounded': rounded },
            { 'gg-button_with-icon': icon }
        )}
        onClick={onClick}
        {...btnProps}
    >
        {icon || children}
    </button>
);

export default Button;
