import React, { useState } from 'react';
import Paragraph from 'gg-ukit/components/Paragraph';
import ModalComponent from 'gg-ukit/components/Modal';
import Button, { ButtonKind } from 'gg-ukit/components/Button';

export const Modal = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <Button
                kind={ButtonKind.Promo}
                onClick={() => {
                    setShow(!show);
                }}
            >
                Open
            </Button>
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
