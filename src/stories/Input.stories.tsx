import React from 'react';
import InputComponent, { InputKind } from 'components/Input';

export const DefaultInput = (args) => <InputComponent {...args} type="text" />;
DefaultInput.args = {
    placeholder: 'default input',
};

export const SecondaryInput = (args) => <InputComponent {...args} type="text" />;
SecondaryInput.args = {
    kind: InputKind.Secondary,
    placeholder: 'secondary input',
};

export default {
    title: 'Input',
    component: InputComponent,
    argTypes: {
        kind: {
            description: 'Тип input',
            control: {
                type: 'select',
                options: InputKind,
            },
        },
        placeholder: {
            description: 'Placeholder',
            control: {
                type: 'text',
            },
        },
    },
};
