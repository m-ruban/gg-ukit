import React from 'react';
import TooltipComponent from 'gg-ukit/components/Tooltip';
import Paragraph from 'gg-ukit/components/Paragraph';

export const Tooltip = (args) => (
    <Paragraph>
        Где-то влияние, великого отца ужасов, ощущается меньше, как в сериях Amnesia и Layers of Fear. А где-то можно
        найти лишь лавкрафтовские крохи, например, в первом
        <TooltipComponent view={<>Финальный босс игры - Шуб-Ниггурат, взят из произведений Лавкрафта</>} {...args}>
            Quake
        </TooltipComponent>
        . Но, если рассматривать конкретно жанр игровых ужасов, то получается довольно мемная картинка. Где-то Лавкрафта
        видно целиком, например, в Sinking City или в Call of Cthulhu.
    </Paragraph>
);

export default {
    title: 'Tooltip',
    component: TooltipComponent,
    argTypes: {
        view: {
            table: {
                disable: true,
            },
        },
    },
};
