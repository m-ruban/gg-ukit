import React from 'react';

import { H1 as Header1, H2 as Header2, H3 as Header3, H4 as Header4 } from 'components/Header';
import { HeaderLine } from 'components/Header/BasicHeader';

export const H1 = (args) => <Header1 {...args} />;
H1.args = {
    title: 'Header H1',
};

export const H2 = (args) => <Header2 {...args} />;
H2.args = {
    title: 'Header H2',
};

export const H3 = (args) => <Header3 {...args} />;
H3.args = {
    title: 'Header H3',
};

export const H4 = (args) => <Header4 {...args} />;
H4.args = {
    title: 'Header H4',
};

export default {
    title: 'Headers',
    argTypes: {
        line: {
            control: {
                type: 'select',
                options: HeaderLine,
            },
        },
        combineColor: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
    },
};
