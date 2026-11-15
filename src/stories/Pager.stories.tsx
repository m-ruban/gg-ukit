import React from 'react';
import PagerComponent from 'gg-ukit/components/Pager';

export const Pager = (args) => <PagerComponent {...args} />;
Pager.args = {
    selected: 6,
    prev: true,
    start: [1, 2],
    middle: [5, 6, 7],
    end: [9, 10],
    next: true,
    urlTemplate: 'http://gamespirit.org/reviews/%PAGE%/',
};

export default {
    title: 'Pager',
    component: PagerComponent,
    argTypes: {
        selected: {
            description: 'prev',
            control: {
                type: 'number',
            },
        },
        prev: {
            description: 'prev',
            control: {
                type: 'boolean',
            },
        },
        start: {
            description: 'start',
            control: {
                type: 'object',
            },
        },
        middle: {
            description: 'middle',
            control: {
                type: 'object',
            },
        },
        end: {
            description: 'end',
            control: {
                type: 'object',
            },
        },
        next: {
            description: 'next',
            control: {
                type: 'boolean',
            },
        },
        urlTemplate: {
            description: 'pathname',
            control: {
                type: 'text',
            },
        },
    },
};
