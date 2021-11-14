import React, { useState } from 'react';
import Paragraph from 'components/Paragraph';
import ModalComponent from 'components/Modal';

export const Modal = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                open
            </button>
            <ModalComponent
                visible={show}
                onClose={() => {
                    setShow(!show);
                }}
            >
                <Paragraph>
                    Карта игрового мира так же проста - центральный город, в котором расположена вся необходимая герою
                    инфраструктура и четыре большие локации расположены по четырём частям света. Каждый уровень имеет
                    свой дизайн и тематику - будь то северные горы, болота или затопленный город. В конце каждой локации
                    есть босс, который и даст вам необходимую часть ключа.
                </Paragraph>
            </ModalComponent>
        </>
    );
};

export default {
    title: 'Modal',
    component: ModalComponent,
};
