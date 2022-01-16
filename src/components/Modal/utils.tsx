import Supports from 'modules/support';

enum NoscrollCssClasses {
    General = 'gg-modal-no-scroll',
    Ios = 'gg-modal-no-scroll_ios',
}

const getScrollbarWidth = (): number => {
    const div = document.createElement('div');
    div.classList.add('scroll-measure');
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
};

export default {
    enableScroll: (): void => {
        document.body.style.paddingRight = '';
        document.body.classList.remove(NoscrollCssClasses.General);
        document.body.classList.remove(NoscrollCssClasses.Ios);
        document.documentElement.classList.remove(NoscrollCssClasses.General);
        document.documentElement.classList.remove(NoscrollCssClasses.Ios);
    },
    disableScroll: (): void => {
        const bodyRightPadding = parseInt(document.body.style.paddingRight || '0', 10);
        document.body.style.paddingRight = `${bodyRightPadding + getScrollbarWidth()}px`;
        document.body.classList.add(NoscrollCssClasses.General);
        if (Supports.ios()) {
            document.body.classList.add(NoscrollCssClasses.Ios);
            document.documentElement.classList.add(NoscrollCssClasses.General);
            document.documentElement.classList.add(NoscrollCssClasses.Ios);
        }
    },
};
