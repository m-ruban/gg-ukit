const lazyDetector = function (detector): () => boolean {
    let result: boolean;
    return function () {
        if (typeof result === 'undefined') {
            result = detector();
        }
        return result;
    };
};

let userAgent: string;
const getUserAgent = (): string => {
    if (typeof userAgent === 'undefined') {
        userAgent = navigator.userAgent.toLowerCase();
    }
    return userAgent;
};

interface SupportProps {
    historyApi: () => boolean;
    android: () => boolean;
    IEMobile: () => boolean;
    IE: () => boolean;
    mobile: () => boolean;
    ios: () => boolean;
    webkit: () => boolean;
    touch: () => boolean;
}

const Supports: SupportProps = {
    historyApi: lazyDetector(() => !!(window.history && window.history.pushState)),
    android: lazyDetector(
        () =>
            /android/i.test(getUserAgent()) &&
            !/IEMobile/i.test(getUserAgent()) &&
            !/(ipad|ipod|iphone)/i.test(getUserAgent())
    ),
    IEMobile: lazyDetector(() => /IEMobile/i.test(getUserAgent())),
    IE: lazyDetector(
        () =>
            /MSIE/i.test(getUserAgent()) ||
            (/trident/.test(getUserAgent()) && /rv:11/.test(getUserAgent())) ||
            /edge/.test(getUserAgent())
    ),
    mobile: lazyDetector(() => /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(getUserAgent())),
    ios: lazyDetector(() => /(ipad|ipod|iphone)/i.test(getUserAgent())),
    webkit: lazyDetector(() => /webkit/i.test(getUserAgent())),
    touch: lazyDetector(() => 'ontouchstart' in window),
};

export default Supports;
