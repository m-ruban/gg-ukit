import React from 'react';
import ButtonComponent, { ButtonKind } from 'gg-ukit/components/Button';
import Colors from 'gg-ukit/modules/colors';
import ArrowLeftAlt2 from 'gg-ukit/components/Icon/ArrowLeftAlt2';

export const Button = (args) => <ButtonComponent {...args}>Click</ButtonComponent>;

export const SecondaryButton = (args) => <ButtonComponent {...args}>Click</ButtonComponent>;
SecondaryButton.args = {
    kind: ButtonKind.Secondary,
};

export const DimmedButton = (args) => <ButtonComponent {...args}>Click</ButtonComponent>;
DimmedButton.args = {
    kind: ButtonKind.Dimmed,
};

export const PromoButton = (args) => <ButtonComponent {...args}>Click</ButtonComponent>;
PromoButton.args = {
    kind: ButtonKind.Promo,
};

export const RoundedButton = (args) => <ButtonComponent {...args}>Click</ButtonComponent>;
RoundedButton.args = {
    rounded: true,
};

export const IconButton = (args) => <ButtonComponent {...args} />;
IconButton.args = {
    rounded: true,
    kind: ButtonKind.Promo,
    icon: <ArrowLeftAlt2 color={Colors.Secondary} scale={1} />,
};

export default {
    title: 'Button',
    component: ButtonComponent,
    argTypes: {
        kind: {
            description: 'Тип кнопки',
            control: {
                type: 'select',
                options: ButtonKind,
            },
        },
        rounded: {
            description: 'Скругленные края границы',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
        onClick: {
            description: 'Обработчик события click',
            action: 'clicked',
        },
        icon: {
            table: {
                disable: true,
            },
        },
    },
};
