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
        default: 'gg-ukit',
        values: [
            {
                name: 'gg-ukit',
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
