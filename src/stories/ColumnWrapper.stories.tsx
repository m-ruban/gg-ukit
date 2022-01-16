import React from 'react';
import CustomDocsPage from 'stories/CustomDocsPage.utils';
import Paragraph from 'components/Paragraph';
import ColumnsWrapperComponent from 'components/ColumnsWrapper';
import Column from 'components/Column';

export const Wrapper = () => (
    <ColumnsWrapperComponent>
        <Column l={6}>
            <Paragraph>
                Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                инфраструктура и четыре большие локации расположены по четырём частям света. Каждый уровень имеет свой
                дизайн и тематику - будь то северные горы, болота или затопленный город. В конце каждой локации есть
                босс, который и даст вам необходимую часть ключа.
            </Paragraph>
        </Column>
    </ColumnsWrapperComponent>
);

const DocsPage = () => (
    <CustomDocsPage
        description={
            <>
                <p>Служит контейнером для колонок</p>
            </>
        }
    />
);

export default {
    title: 'Columns/Wrapper',
    component: ColumnsWrapperComponent,
    parameters: {
        docs: {
            page: DocsPage,
        },
    },
};
