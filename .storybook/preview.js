import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        expanded: true,
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
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
}
