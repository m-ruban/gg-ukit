import React from 'react';
import InputComponent, { InputKind } from 'components/Input';

export const DefaultInput = (args) => <InputComponent {...args} type="text" placeholder="default input" />;
DefaultInput.args = {};

export const SecondaryInput = (args) => <InputComponent {...args} type="text" placeholder="secondary input" />;
SecondaryInput.args = {
    kind: InputKind.Secondary,
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
    },
};
