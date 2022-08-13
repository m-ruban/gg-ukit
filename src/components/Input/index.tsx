import React, { FC, ChangeEvent, ComponentPropsWithoutRef } from 'react';
import classnames from 'classnames';
import { Merge } from 'type-fest';
import 'gg-ukit/components/Input/input.less';

export enum InputKind {
    Secondary = 'secondary',
    Minor = 'minor',
}

export type InputProps = Merge<
    ComponentPropsWithoutRef<'input'>,
    {
        kind?: InputKind;
        defaultValue?: string;
        value?: string | number;
        placeholder?: string;
        size?: number;
        disabled?: boolean;
        invalid?: boolean;
        rounded?: boolean;
        onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    }
>;

const Input: FC<InputProps> = ({ placeholder, rounded, kind = '', ...inputProps }) => (
    <input
        className={classnames('gg-input', { [`gg-input_${kind}`]: kind }, { [`gg-input_rounded`]: rounded })}
        placeholder={placeholder}
        {...inputProps}
    />
);

export default Input;
