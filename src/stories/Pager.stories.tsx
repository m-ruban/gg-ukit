import React from 'react';
import PagerComponent from 'gg-ukit/components/Pager';

export const Pager = (args) => <PagerComponent {...args} />;
Pager.args = {};

export default {
    title: 'Pager',
    component: PagerComponent,
    argTypes: {
        selected: {
            description: 'prev',
            defaultValue: 6,
            control: {
                type: 'number',
            },
        },
        prev: {
            description: 'prev',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
        },
        start: {
            description: 'start',
            defaultValue: [1, 2],
            control: {
                type: 'array',
            },
        },
        middle: {
            description: 'middle',
            defaultValue: [5, 6, 7],
            control: {
                type: 'array',
            },
        },
        end: {
            description: 'end',
            defaultValue: [9, 10],
            control: {
                type: 'array',
            },
        },
        next: {
            description: 'next',
            defaultValue: true,
            control: {
                type: 'boolean',
            },
        },
        urlTemplate: {
            description: 'pathname',
            defaultValue: 'http://gamespirit.org/reviews/%PAGE%/',
            control: {
                type: 'text',
            },
        },
    },
};
