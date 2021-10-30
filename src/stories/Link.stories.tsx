import React from 'react';

import Link, { LinkType } from 'components/Link';

export default {
    title: 'Links',
    component: Link,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: LinkType,
            },
        },
    },
};

export const DefaultLink = (args) => <Link {...args}>Default Link</Link>;

export const SecondaryLink = (args) => <Link {...args}>Secondary Link</Link>;
SecondaryLink.args = {
    type: LinkType.Secondary,
};

export const PromoLink = (args) => <Link {...args}>Promo Link</Link>;
PromoLink.args = {
    type: LinkType.Promo,
};
