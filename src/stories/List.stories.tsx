import React from 'react';
import ListComponent from 'gg-ukit/components/List';

export const List = (args) => (
    <ListComponent {...args}>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetuer adipiscing elit</li>
        <li>Aenean commodo ligula eget dolor</li>
    </ListComponent>
);

export default {
    title: 'List',
    component: ListComponent,
};
