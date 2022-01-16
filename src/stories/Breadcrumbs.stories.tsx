import React from 'react';
import CustomDocsPage from 'stories/CustomDocsPage.utils';
import BreadcrumbsComponent from 'components/Breadcrumbs';
import { LinkType } from 'components/Link';

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

export const Breadcrumbs = (args) => <BreadcrumbsComponent {...args} links={links} />;

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
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
