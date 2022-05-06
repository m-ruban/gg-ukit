import React, { FC } from 'react';
import classnames from 'classnames';
import 'gg-ukit/components/Input/input.less';

export enum InputKind {
    Secondary = 'secondary',
}

interface InputProps {
    kind?: InputKind;
    placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder, kind = '', ...inputProps }) => (
    <input
        className={classnames('gg-input', { [`gg-input_${kind}`]: kind })}
        placeholder={placeholder}
        {...inputProps}
    />
);

export default Input;
