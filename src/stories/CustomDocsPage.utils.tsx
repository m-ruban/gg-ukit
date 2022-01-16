import React, { FC, ReactNode } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

interface CustomDocsPageProp {
    description: ReactNode;
}

const CustomDocsPage: FC<CustomDocsPageProp> = ({ description }) => (
    <>
        <Title />
        <div className="description">{description}</div>
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
    </>
);

export default CustomDocsPage;
