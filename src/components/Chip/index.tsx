import React, { ChangeEvent, FC } from 'react';
import { Merge } from 'type-fest';

import 'gg-ukit/components/Chip/chip.less';

export interface ChipProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    labelProps?: JSX.IntrinsicElements['span'];
    wrapperProps?: JSX.IntrinsicElements['label'];
    defaultChecked?: boolean;
    checked?: boolean;
    defaultValue?: string;
    value?: string;
    disabled?: boolean;
}

const Chip: FC<Merge<JSX.IntrinsicElements['input'], ChipProps>> = (props) => {
    const { children, labelProps, wrapperProps, ...inputProps } = props;
    return (
        <label className="gg-chip" {...wrapperProps}>
            <input {...inputProps} type="checkbox" className="gg-chip-input" />
            <span className="gg-chip-input-content" {...labelProps}>
                {children}
            </span>
        </label>
    );
};

export default Chip;
