import React from 'react';

import { Icons } from 'shared/ui';

type Props = {
    variants: 'clip' | 'arrow' | 'exit';
};

function BaseIcons(props: Props) {
    const { variants } = props;

    switch (variants) {
        case 'exit': {
            return <Icons variants="exit" size={8} />;
        }
        case 'clip': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.44 11.05L12.25 20.24C11.1241 21.3659 9.59717 21.9984 8.00498 21.9984C6.4128 21.9984 4.88583 21.3659 3.75998 20.24C2.63414 19.1142 2.00165 17.5872 2.00165 15.995C2.00165 14.4029 2.63414 12.8759 3.75998 11.75L12.95 2.56004C13.7005 1.80948 14.7185 1.38782 15.78 1.38782C16.8414 1.38782 17.8594 1.80948 18.61 2.56004C19.3605 3.3106 19.7822 4.32859 19.7822 5.39004C19.7822 6.4515 19.3605 7.46948 18.61 8.22004L9.40998 17.41C9.0347 17.7853 8.52571 17.9962 7.99498 17.9962C7.46426 17.9962 6.95527 17.7853 6.57998 17.41C6.2047 17.0348 5.99387 16.5258 5.99387 15.995C5.99387 15.4643 6.2047 14.9553 6.57998 14.58L10.825 10.34"
                        stroke="#717394"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        }

        case 'arrow': {
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.319 11.1141L1.79365 19.8767C1.56352 19.9872 1.30511 20.0247 1.05306 19.9841C0.801017 19.9436 0.567388 19.827 0.383502 19.6499C0.199617 19.4728 0.0742655 19.2438 0.0242557 18.9934C-0.025754 18.7431 0.00196879 18.4835 0.103707 18.2493L3.09553 11.5272C3.13426 11.4374 3.1677 11.3455 3.19567 11.2518H11.8206C12.1526 11.2518 12.471 11.1199 12.7058 10.8852C12.9406 10.6504 13.0724 10.332 13.0724 10C13.0724 9.668 12.9406 9.34961 12.7058 9.11485C12.471 8.88009 12.1526 8.74821 11.8206 8.74821H3.19567C3.1677 8.65453 3.13426 8.56258 3.09553 8.47281L0.103707 1.75068C0.00196879 1.51654 -0.025754 1.2569 0.0242557 1.00657C0.0742655 0.756236 0.199617 0.527175 0.383502 0.350102C0.567388 0.173029 0.801017 0.0564093 1.05306 0.0158789C1.30511 -0.0246515 1.56352 0.0128458 1.79365 0.123343L19.319 8.8859C19.524 8.99095 19.6961 9.15055 19.8163 9.34712C19.9364 9.54369 20 9.76961 20 10C20 10.2304 19.9364 10.4563 19.8163 10.6529C19.6961 10.8495 19.524 11.009 19.319 11.1141Z"
                        fill="white"
                    />
                </svg>
            );
        }

        default:
            return null;
    }
}

export default BaseIcons;
