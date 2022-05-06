import React from 'react';
import CustomDocsPage from 'stories/CustomDocsPage.utils';
import Column from 'components/Column';
import ColumnsWrapper from 'components/ColumnsWrapper';
import Image from 'components/Image';

export const BasicImage = (args) => (
    <ColumnsWrapper>
        <Column l={7} m={8}>
            <Image src="/assets/example_preload.jpeg" alt="test image" {...args} />
        </Column>
    </ColumnsWrapper>
);

const DocsPage = () => (
    <CustomDocsPage description={<p>Компонент Image имеет два обязательных параметра src и alt.</p>} />
);

export default {
    title: 'Image/Basic Image',
    component: Image,
    argTypes: {
        src: {
            table: {
                disable: true,
            },
        },
        alt: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
