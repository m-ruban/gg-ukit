import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import BreadcrumbsComponent from 'gg-ukit/components/Breadcrumbs';
import { LinkType } from 'gg-ukit/components/Link';

const links = [
    {
        title: 'Home',
        href: '',
    },
    {
        title: 'Обзоры игр',
        href: '',
    },
    {
        title: 'Обзор Call of the Sea',
        href: '',
    },
];

export const Breadcrumbs = (args) => <BreadcrumbsComponent {...args} />;
Breadcrumbs.args = {
    links: links,
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Компонент верхнеуровневой навигации. Допустимо использовать любой тип ссылок из enum LinkType.</p>
            </>
        }
    />
);

export default {
    title: 'Breadcrumbs',
    component: BreadcrumbsComponent,
    argTypes: {
        linkType: {
            description: 'Тип ссылки',
            control: {
                type: 'select',
                options: LinkType,
            },
        },
        links: {
            description: 'Ссылки для пагинации',
            type: 'select',
            options: {
                Example: [
                    {
                        title: 'Test',
                        href: '',
                    },
                    {
                        title: 'Test1',
                        href: '',
                    },
                ],
            },
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
