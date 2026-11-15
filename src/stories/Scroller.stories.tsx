import React, { useState } from 'react';
import ScrollerComponent from 'gg-ukit/components/Scroller';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

const links = Array.from({ length: 16 }, (_, index) => `Ссылка ${index + 1}`);

export const Links = () => {
    const [lastClicked, setLastClicked] = useState('—');
    const [clicks, setClicks] = useState(0);

    return (
        <div style={{ maxWidth: '600px' }}>
            <Paragraph>
                Нажмите на ссылку или перетащите ряд мышью. Движение меньше 5 px сохраняет клик, перетаскивание
                прокручивает ряд без перехода по ссылке.
            </Paragraph>
            <ScrollerComponent>
                <div
                    style={{ display: 'flex', gap: '24px', padding: '24px 0', whiteSpace: 'nowrap' }}
                    onDragStart={(event) => event.preventDefault()}
                >
                    {links.map((label, index) => (
                        <div
                            key={label}
                            style={{ flexShrink: 0 }}
                            onClick={() => {
                                setLastClicked(label);
                                setClicks((value) => value + 1);
                            }}
                        >
                            <Link href={`#scroller-link-${index + 1}`} type={LinkType.Secondary}>
                                {label}
                            </Link>
                        </div>
                    ))}
                </div>
            </ScrollerComponent>
            <div role="status">
                <Paragraph>
                    Последний клик: {lastClicked}. Всего кликов: {clicks}.
                </Paragraph>
            </div>
        </div>
    );
};

export default {
    title: 'Scroller',
    component: ScrollerComponent,
};
