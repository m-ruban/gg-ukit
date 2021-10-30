import React, { FC } from 'react';
import 'components/Button/button.less';

enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

interface ButtonProps {
    primary: boolean;
    backgroundColor: string;
    size: ButtonSize;
    label: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ primary, backgroundColor, size, label, onClick, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: ButtonSize.Medium,
};

export default Button;
