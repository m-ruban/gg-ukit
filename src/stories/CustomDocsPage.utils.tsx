import React, { FC, ReactNode } from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

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
        <Controls />
        <Stories />
    </>
);

export default CustomDocsPage;
