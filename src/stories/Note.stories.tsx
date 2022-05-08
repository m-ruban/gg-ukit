import React from 'react';
import Paragraph from 'gg-ukit/components/Paragraph';
import NoteComponent from 'gg-ukit/components/Note';

export const Note = (args) => (
    <>
        <Paragraph>
            Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
            инфраструктура и четыре большие локации расположены по четырём частям света.
        </Paragraph>
        <NoteComponent {...args}>
            В конце каждой локации есть босс, который и даст вам необходимую часть ключа.
        </NoteComponent>
        <Paragraph>
            Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
            инфраструктура и четыре большие локации расположены по четырём частям света.
        </Paragraph>
    </>
);

export default {
    title: 'Note',
    component: NoteComponent,
};
