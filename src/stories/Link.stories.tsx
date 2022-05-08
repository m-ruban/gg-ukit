import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import Link, { LinkType } from 'gg-ukit/components/Link';

export const DefaultLink = (args) => <Link {...args}>Default Link</Link>;

export const SecondaryLink = (args) => <Link {...args}>Secondary Link</Link>;
SecondaryLink.args = {
    type: LinkType.Secondary,
};

export const PromoLink = (args) => <Link {...args}>Promo Link</Link>;
PromoLink.args = {
    type: LinkType.Promo,
};

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Допустимо использовать, если действие должно приводить к открытию новой страницы.</p>
            </>
        }
    />
);

export default {
    title: 'Link',
    component: Link,
    argTypes: {
        type: {
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
