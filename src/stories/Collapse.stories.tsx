import React from 'react';
import CustomDocsPage from 'stories/utils/CustomDocsPage';
import CollapseComponent from 'components/Collapse';
import Paragraph from 'components/Paragraph';

const TextExapmle = (
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

export const BasicCollapse = (args) => <CollapseComponent {...args}>{TextExapmle}</CollapseComponent>;
BasicCollapse.args = {
    title: 'Lorem ipsum dolor sit amet',
};

export const OpenedCollapse = (args) => <CollapseComponent {...args}>{TextExapmle}</CollapseComponent>;
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
    },
};
