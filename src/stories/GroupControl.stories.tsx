import React from 'react';
import GroupControlComponent from 'components/GroupControl';
import Input from 'components/Input';
import Button, { ButtonKind } from 'components/Button';
import Colors from 'modules/colors';
import Search from 'components/Icon/Search';

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
