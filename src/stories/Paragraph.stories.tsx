import React from 'react';
import ParagraphComponent from 'components/Paragraph';

export const Paragraph = (args) => (
    <ParagraphComponent {...args}>
        Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
        инфраструктура и четыре большие локации расположены по четырём частям света. Каждый уровень имеет свой дизайн и
        тематику - будь то северные горы, болота или затопленный город. В конце каждой локации есть босс, который и даст
        вам необходимую часть ключа.
    </ParagraphComponent>
);

export default {
    title: 'Paragraph',
    component: ParagraphComponent,
};
