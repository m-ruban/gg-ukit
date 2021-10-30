import { themes } from '@storybook/theming';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'gg-ui',
        values: [
            {
                name: 'gg-ui',
                value: '#1F2327',
            },
        ],
    },
    docs: {
        theme: themes.dark,
    },
    previewTabs: {
        'storybook/docs/panel': {
            index: 0,
        },
        canvas: {
            index: 1,
        },
    },
    viewMode: 'docs',
}
