import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import CollapseComponent from 'gg-ukit/components/Collapse';
import Paragraph from 'gg-ukit/components/Paragraph';

const TextExample = (
    <>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </Paragraph>
        <Paragraph>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi.
        </Paragraph>
    </>
);

export const BasicCollapse = (args) => <CollapseComponent {...args}>{TextExample}</CollapseComponent>;
BasicCollapse.args = {
    title: 'Lorem ipsum dolor sit amet',
};

export const OpenedCollapse = (args) => <CollapseComponent {...args}>{TextExample}</CollapseComponent>;
OpenedCollapse.args = {
    title: 'Lorem ipsum dolor sit amet',
    defaultShow: true,
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Переключает видимость контента.</p>
            </>
        }
    />
);

export default {
    title: 'Collapse',
    component: CollapseComponent,
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
    argTypes: {
        title: {
            description: 'Заголовок',
            control: {
                type: 'text',
            },
        },
        defaultShow: {
            table: {
                disable: true,
            },
        },
    },
};
