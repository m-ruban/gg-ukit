import React from 'react';
import CustomDocsPage from 'gg-ukit/stories/CustomDocsPage.utils';
import ParagraphComponent from 'gg-ukit/components/Paragraph';

export const Paragraph = (args) => (
    <ParagraphComponent {...args}>
        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
        инфраструктура и четыре большие локации расположены по четырём частям света. Каждый уровень имеет свой дизайн и
        тематику - будь то северные горы, болота или затопленный город. В конце каждой локации есть босс, который и даст
        вам необходимую часть ключа.
    </ParagraphComponent>
);

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Стандартный текстовый абзац.</p>
            </>
        }
    />
);

export default {
    title: 'Paragraph',
    component: ParagraphComponent,
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
