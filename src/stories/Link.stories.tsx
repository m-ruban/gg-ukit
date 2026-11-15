import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import Link, { LinkType } from 'gg-ukit/components/Link';

export const DefaultLink = (args) => (
    <Link {...args} href="/">
        Default Link
    </Link>
);

export const SecondaryLink = (args) => (
    <Link {...args} href="/">
        Secondary Link
    </Link>
);
SecondaryLink.args = {
    type: LinkType.Secondary,
};

export const PromoLink = (args) => (
    <Link {...args} href="/">
        Promo Link
    </Link>
);
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
            options: Object.values(LinkType),
            control: { type: 'select' },
        },
    },
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
