import React from 'react';
import GroupControlComponent from 'gg-ukit/components/GroupControl';
import Input from 'gg-ukit/components/Input';
import Button, { ButtonKind } from 'gg-ukit/components/Button';
import Colors from 'gg-ukit/modules/colors';
import Search from 'gg-ukit/components/Icon/Search';

export const GroupControl = (args) => (
    <GroupControlComponent {...args}>
        <Input placeholder="test input" />
        <Button kind={ButtonKind.Promo} icon={<Search color={Colors.Secondary} />} />
    </GroupControlComponent>
);

export default {
    title: 'Group Control',
    component: GroupControlComponent,
};
