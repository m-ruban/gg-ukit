import { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { toId, storyNameFromExport } from '@storybook/csf';

type GenerateStoryIdFunc = (name: string) => string;
export const generateStoryId: GenerateStoryIdFunc = (name) => {
    const docsContext = useContext(DocsContext);
    return `${toId(docsContext.kind as string, storyNameFromExport(name))}`;
};

type GeneratePageIdFunc = () => string;
export const generatePageId: GeneratePageIdFunc = () => {
    const docsContext = useContext(DocsContext);
    return `${toId(docsContext.kind as string, 'page')}`;
};
