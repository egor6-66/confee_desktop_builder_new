import React from 'react';

import { BaseIconsProps } from '../types';

function BaseIcons(props: BaseIconsProps) {
    const { variants, size = 24 } = props;

    switch (variants) {
        case 'arrow-drop-down': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.9709 9.1697C16.7835 8.98345 16.5301 8.87891 16.2659 8.87891C16.0017 8.87891 15.7483 8.98345 15.5609 9.1697L11.9709 12.7097L8.4309 9.1697C8.24353 8.98345 7.99008 8.87891 7.7259 8.87891C7.46171 8.87891 7.20826 8.98345 7.0209 9.1697C6.92717 9.26266 6.85277 9.37326 6.802 9.49512C6.75124 9.61698 6.7251 9.74769 6.7251 9.8797C6.7251 10.0117 6.75124 10.1424 6.802 10.2643C6.85277 10.3861 6.92717 10.4967 7.0209 10.5897L11.2609 14.8297C11.3539 14.9234 11.4645 14.9978 11.5863 15.0486C11.7082 15.0994 11.8389 15.1255 11.9709 15.1255C12.1029 15.1255 12.2336 15.0994 12.3555 15.0486C12.4773 14.9978 12.5879 14.9234 12.6809 14.8297L16.9709 10.5897C17.0646 10.4967 17.139 10.3861 17.1898 10.2643C17.2406 10.1424 17.2667 10.0117 17.2667 9.8797C17.2667 9.74769 17.2406 9.61698 17.1898 9.49512C17.139 9.37326 17.0646 9.26266 16.9709 9.1697Z"
                        fill="var(--text-primary)"
                    />
                </svg>
            );
        }
        case 'arrow-drop-up': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.9977 13.4098L12.6985 9.16982C12.6054 9.07609 12.4945 9.0017 12.3724 8.95093C12.2503 8.90016 12.1193 8.87402 11.987 8.87402C11.8547 8.87402 11.7237 8.90016 11.6016 8.95093C11.4795 9.0017 11.3687 9.07609 11.2755 9.16982L7.02641 13.4098C6.93248 13.5028 6.85793 13.6134 6.80705 13.7352C6.75617 13.8571 6.72998 13.9878 6.72998 14.1198C6.72998 14.2518 6.75617 14.3825 6.80705 14.5044C6.85793 14.6263 6.93248 14.7369 7.02641 14.8298C7.21418 15.0161 7.46817 15.1206 7.73292 15.1206C7.99767 15.1206 8.25167 15.0161 8.43943 14.8298L11.987 11.2898L15.5346 14.8298C15.7213 15.0146 15.9732 15.1187 16.2361 15.1198C16.368 15.1206 16.4987 15.0954 16.6208 15.0456C16.7429 14.9958 16.854 14.9225 16.9476 14.8298C17.0449 14.7402 17.1234 14.6322 17.1786 14.5122C17.2339 14.3921 17.2647 14.2623 17.2694 14.1302C17.274 13.9982 17.2524 13.8666 17.2058 13.7429C17.1592 13.6193 17.0884 13.506 16.9977 13.4098Z"
                        fill="var(--text-primary)"
                    />
                </svg>
            );
        }
        case 'arrow-left': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.9999 11.0002H7.82992L12.7099 6.12016C13.0999 5.73016 13.0999 5.09016 12.7099 4.70016C12.6174 4.60746 12.5075 4.53391 12.3865 4.48373C12.2656 4.43354 12.1359 4.40771 12.0049 4.40771C11.874 4.40771 11.7443 4.43354 11.6233 4.48373C11.5023 4.53391 11.3924 4.60746 11.2999 4.70016L4.70992 11.2902C4.61722 11.3827 4.54367 11.4926 4.49349 11.6135C4.44331 11.7345 4.41748 11.8642 4.41748 11.9952C4.41748 12.1261 4.44331 12.2558 4.49349 12.3768C4.54367 12.4978 4.61722 12.6076 4.70992 12.7002L11.2999 19.2902C11.3925 19.3827 11.5024 19.4562 11.6234 19.5063C11.7443 19.5564 11.874 19.5822 12.0049 19.5822C12.1359 19.5822 12.2655 19.5564 12.3865 19.5063C12.5074 19.4562 12.6173 19.3827 12.7099 19.2902C12.8025 19.1976 12.8759 19.0877 12.9261 18.9667C12.9762 18.8457 13.0019 18.7161 13.0019 18.5852C13.0019 18.4542 12.9762 18.3246 12.9261 18.2036C12.8759 18.0827 12.8025 17.9727 12.7099 17.8802L7.82992 13.0002H18.9999C19.5499 13.0002 19.9999 12.5502 19.9999 12.0002C19.9999 11.4502 19.5499 11.0002 18.9999 11.0002Z"
                        fill="var(--text-primary)"
                    />
                </svg>
            );
        }
        case 'search': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7192 20.3109L18.0114 16.6309C19.4506 14.8353 20.1476 12.5562 19.959 10.2622C19.7705 7.9682 18.7106 5.83368 16.9975 4.29754C15.2844 2.76141 13.0481 1.94041 10.7486 2.00337C8.44911 2.06633 6.26109 3.00846 4.63448 4.63604C3.00786 6.26362 2.06629 8.45294 2.00337 10.7538C1.94045 13.0547 2.76095 15.2923 4.29618 17.0064C5.83141 18.7206 7.96466 19.781 10.2573 19.9697C12.5499 20.1584 14.8277 19.461 16.6222 18.0209L20.3 21.7009C20.3929 21.7946 20.5035 21.869 20.6253 21.9198C20.747 21.9706 20.8777 21.9967 21.0096 21.9967C21.1415 21.9967 21.2722 21.9706 21.3939 21.9198C21.5157 21.869 21.6263 21.7946 21.7192 21.7009C21.8993 21.5144 22 21.2652 22 21.0059C22 20.7466 21.8993 20.4974 21.7192 20.3109ZM11.0155 18.0209C9.63189 18.0209 8.27932 17.6104 7.12886 16.8412C5.9784 16.072 5.08172 14.9788 4.55223 13.6997C4.02273 12.4206 3.88419 11.0131 4.15412 9.65527C4.42406 8.2974 5.09035 7.05012 6.06873 6.07115C7.04712 5.09219 8.29366 4.4255 9.65072 4.1554C11.0078 3.88531 12.4144 4.02393 13.6927 4.55374C14.9711 5.08356 16.0637 5.98076 16.8324 7.13191C17.6011 8.28305 18.0114 9.63643 18.0114 11.0209C18.0114 12.8774 17.2743 14.6579 15.9623 15.9706C14.6504 17.2834 12.871 18.0209 11.0155 18.0209Z" />
                </svg>
            );
        }
        case 'add-contact': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" fill="#2A313C" />
                    <path d="M9 14C6.33 14 1 15.34 1 18V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V18C17 15.34 11.67 14 9 14Z" fill="#2A313C" />
                    <path d="M20 10V7H18V10H15V12H18V15H20V12H23V10H20Z" fill="#2A313C" />
                </svg>
            );
        }
        case 'close': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6434 11.9951L18.6552 6.99422C18.8747 6.77471 18.998 6.477 18.998 6.16657C18.998 5.85614 18.8747 5.55842 18.6552 5.33892C18.4358 5.11941 18.1381 4.99609 17.8277 4.99609C17.5173 4.99609 17.2196 5.11941 17.0002 5.33892L12 10.3515L6.99983 5.33892C6.78036 5.11941 6.48268 4.99609 6.1723 4.99609C5.86191 4.99609 5.56424 5.11941 5.34476 5.33892C5.12529 5.55842 5.00199 5.85614 5.00199 6.16657C5.00199 6.477 5.12529 6.77471 5.34476 6.99422L10.3566 11.9951L5.34476 16.996C5.23552 17.1043 5.14881 17.2333 5.08964 17.3753C5.03047 17.5174 5 17.6697 5 17.8236C5 17.9775 5.03047 18.1299 5.08964 18.2719C5.14881 18.414 5.23552 18.5429 5.34476 18.6513C5.45312 18.7605 5.58203 18.8473 5.72406 18.9064C5.86609 18.9656 6.01843 18.9961 6.1723 18.9961C6.32616 18.9961 6.47851 18.9656 6.62054 18.9064C6.76257 18.8473 6.89148 18.7605 6.99983 18.6513L12 13.6387L17.0002 18.6513C17.1085 18.7605 17.2374 18.8473 17.3795 18.9064C17.5215 18.9656 17.6738 18.9961 17.8277 18.9961C17.9816 18.9961 18.1339 18.9656 18.2759 18.9064C18.418 18.8473 18.5469 18.7605 18.6552 18.6513C18.7645 18.5429 18.8512 18.414 18.9104 18.2719C18.9695 18.1299 19 17.9775 19 17.8236C19 17.6697 18.9695 17.5174 18.9104 17.3753C18.8512 17.2333 18.7645 17.1043 18.6552 16.996L13.6434 11.9951Z" />
                </svg>
            );
        }
        case 'check': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.7251 8.23151C17.6457 8.15815 17.5513 8.09993 17.4472 8.06019C17.3432 8.02046 17.2316 8 17.1189 8C17.0062 8 16.8946 8.02046 16.7905 8.06019C16.6865 8.09993 16.592 8.15815 16.5126 8.23151L10.1514 14.0701L7.47882 11.6126C7.3964 11.5396 7.29911 11.4822 7.1925 11.4437C7.08589 11.4052 6.97205 11.3863 6.85748 11.3881C6.74291 11.39 6.62985 11.4124 6.52476 11.4543C6.41967 11.4962 6.3246 11.5566 6.24499 11.6322C6.16538 11.7077 6.10278 11.7969 6.06077 11.8946C6.01875 11.9923 5.99815 12.0967 6.00013 12.2017C6.00211 12.3067 6.02664 12.4103 6.07232 12.5066C6.11799 12.603 6.18392 12.6901 6.26634 12.7631L9.54515 15.7685C9.62453 15.8418 9.71897 15.9001 9.82302 15.9398C9.92707 15.9795 10.0387 16 10.1514 16C10.2641 16 10.3757 15.9795 10.4798 15.9398C10.5838 15.9001 10.6783 15.8418 10.7576 15.7685L17.7251 9.38201C17.8118 9.30872 17.881 9.21977 17.9283 9.12077C17.9756 9.02176 18 8.91485 18 8.80676C18 8.69867 17.9756 8.59176 17.9283 8.49275C17.881 8.39375 17.8118 8.3048 17.7251 8.23151Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'double-check': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.6977 7.26314C16.3498 6.92249 15.7876 6.92249 15.4397 7.26314L10.4073 12.1894L11.6654 13.4209L16.6977 8.48596C17.0368 8.15405 17.0368 7.59505 16.6977 7.26314ZM20.4809 7.2544L11.6654 15.8841L8.56034 12.8532C8.21236 12.5126 7.65023 12.5126 7.30225 12.8532C6.95427 13.1939 6.95427 13.7441 7.30225 14.0848L11.0319 17.7358C11.3799 18.0764 11.942 18.0764 12.29 17.7358L21.739 8.4947C22.087 8.15405 22.087 7.60378 21.739 7.26314H21.7301C21.391 6.91376 20.8289 6.91376 20.4809 7.2544ZM2.26099 14.0935L5.99063 17.7445C6.33861 18.0852 6.90074 18.0852 7.24872 17.7445L7.8733 17.1331L3.51907 12.8532C3.17109 12.5126 2.60897 12.5126 2.26099 12.8532C1.913 13.1939 1.913 13.7529 2.26099 14.0935Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'add': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" />
                </svg>
            );
        }
        case 'notifications': {
            return (
                <svg width={size} height={size} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20ZM14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4701 17 15.9201 15.92 15.2901 15.29L14.0001 14Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'notifications-off': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z"
                        fill="#2A313C"
                    />
                    <path d="M5.5 5.5C13.5057 13.5057 11.4943 11.4943 19.5 19.5" stroke="#FF4B4B" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
        }
        case 'more': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'new-message': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 5C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V15C4 15.5304 4.21071 16.0391 4.58579 16.4142C4.96086 16.7893 5.46957 17 6 17H8C8.55228 17 9 17.4477 9 18V19.2338L11.4955 17.7365C11.9691 17.4524 12.5833 17.6059 12.8675 18.0795C13.1516 18.5531 12.9981 19.1673 12.5245 19.4515L8.5145 21.8575C8.20556 22.0429 7.82081 22.0477 7.5073 21.8702C7.19379 21.6927 7 21.3603 7 21V19H6C4.93913 19 3.92172 18.5786 3.17157 17.8284C2.42143 17.0783 2 16.0609 2 15V7C2 5.93913 2.42143 4.92172 3.17157 4.17157C3.92172 3.42143 4.93913 3 6 3H18C19.0609 3 20.0783 3.42143 20.8284 4.17157C21.5786 4.92172 22 5.93913 22 7V12.5C22 13.0523 21.5523 13.5 21 13.5C20.4477 13.5 20 13.0523 20 12.5V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H6ZM7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9ZM7 13C7 12.4477 7.44772 12 8 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H8C7.44772 14 7 13.5523 7 13ZM19 15C19.5523 15 20 15.4477 20 16V18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H20V22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V20H16C15.4477 20 15 19.5523 15 19C15 18.4477 15.4477 18 16 18H18V16C18 15.4477 18.4477 15 19 15Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'logout': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.1499 5H11.1499C11.6999 5 12.1499 4.55 12.1499 4C12.1499 3.45 11.6999 3 11.1499 3H5.1499C4.0499 3 3.1499 3.9 3.1499 5V19C3.1499 20.1 4.0499 21 5.1499 21H11.1499C11.6999 21 12.1499 20.55 12.1499 20C12.1499 19.45 11.6999 19 11.1499 19H5.1499V5Z"
                        fill="#2A313C"
                    />
                    <path
                        d="M20.7999 11.65L18.0099 8.86C17.6899 8.54 17.1499 8.76 17.1499 9.21V11H10.1499C9.5999 11 9.1499 11.45 9.1499 12C9.1499 12.55 9.5999 13 10.1499 13H17.1499V14.79C17.1499 15.24 17.6899 15.46 17.9999 15.14L20.7899 12.35C20.9899 12.16 20.9899 11.84 20.7999 11.65Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'delete': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM9 9H15C15.55 9 16 9.45 16 10V18C16 18.55 15.55 19 15 19H9C8.45 19 8 18.55 8 18V10C8 9.45 8.45 9 9 9ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z" />
                </svg>
            );
        }
        case 'settings': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.4999 12C19.4999 11.77 19.4899 11.55 19.4699 11.32L21.3299 9.91C21.7299 9.61 21.8399 9.05 21.5899 8.61L19.7199 5.38C19.4699 4.94 18.9299 4.76 18.4699 4.96L16.3199 5.87C15.9499 5.61 15.5599 5.38 15.1499 5.19L14.8599 2.88C14.7999 2.38 14.3699 2 13.8699 2H10.1399C9.62991 2 9.19991 2.38 9.13991 2.88L8.84991 5.19C8.43991 5.38 8.04991 5.61 7.67991 5.87L5.52991 4.96C5.06991 4.76 4.52991 4.94 4.27991 5.38L2.40991 8.62C2.15991 9.06 2.26991 9.61 2.66991 9.92L4.52991 11.33C4.50991 11.55 4.49991 11.77 4.49991 12C4.49991 12.23 4.50991 12.45 4.52991 12.68L2.66991 14.09C2.26991 14.39 2.15991 14.95 2.40991 15.39L4.27991 18.62C4.52991 19.06 5.06991 19.24 5.52991 19.04L7.67991 18.13C8.04991 18.39 8.43991 18.62 8.84991 18.81L9.13991 21.12C9.19991 21.62 9.62991 22 10.1299 22H13.8599C14.3599 22 14.7899 21.62 14.8499 21.12L15.1399 18.81C15.5499 18.62 15.9399 18.39 16.3099 18.13L18.4599 19.04C18.9199 19.24 19.4599 19.06 19.7099 18.62L21.5799 15.39C21.8299 14.95 21.7199 14.4 21.3199 14.09L19.4599 12.68C19.4899 12.45 19.4999 12.23 19.4999 12ZM12.0399 15.5C10.1099 15.5 8.53991 13.93 8.53991 12C8.53991 10.07 10.1099 8.5 12.0399 8.5C13.9699 8.5 15.5399 10.07 15.5399 12C15.5399 13.93 13.9699 15.5 12.0399 15.5Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'arrow-drop-right': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.29006 6.71027C8.90006 7.10027 8.90006 7.73027 9.29006 8.12027L13.1701 12.0003L9.29006 15.8803C8.90006 16.2703 8.90006 16.9003 9.29006 17.2903C9.68006 17.6803 10.3101 17.6803 10.7001 17.2903L15.2901 12.7003C15.6801 12.3103 15.6801 11.6803 15.2901 11.2903L10.7001 6.70027C10.3201 6.32027 9.68006 6.32027 9.29006 6.71027Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'swap': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.14003 11.8603L3.36003 14.6503C3.17003 14.8503 3.17003 15.1603 3.36003 15.3603L6.14003 18.1503C6.45003 18.4703 6.99003 18.2403 6.99003 17.8003V16.0003H13C13.55 16.0003 14 15.5503 14 15.0003C14 14.4503 13.55 14.0003 13 14.0003H6.99003V12.2103C6.99003 11.7603 6.45003 11.5403 6.14003 11.8603ZM20.65 8.65033L17.87 5.86033C17.56 5.54033 17.02 5.77033 17.02 6.21033V8.00033H11C10.45 8.00033 10 8.45033 10 9.00033C10 9.55033 10.45 10.0003 11 10.0003H17.01V11.7903C17.01 12.2403 17.55 12.4603 17.86 12.1403L20.64 9.35033C20.84 9.16033 20.84 8.84033 20.65 8.65033Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'personal-acc': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'work-acc': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 16H11C10.45 16 10 15.55 10 15H3.01V19C3.01 20.1 3.91 21 5.01 21H19C20.1 21 21 20.1 21 19V15H14C14 15.55 13.55 16 13 16ZM20 7H16C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V13C10 12.45 10.45 12 11 12H13C13.55 12 14 12.45 14 13V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7ZM10 7C10 5.9 10.9 5 12 5C13.1 5 14 5.9 14 7H9.99H10Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'chat': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 3H4C2.9 3 2.01 3.9 2.01 5L2 23L6 19H20C21.1 19 22 18.1 22 17V5C22 3.9 21.1 3 20 3ZM7 10H17C17.55 10 18 10.45 18 11C18 11.55 17.55 12 17 12H7C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10ZM13 15H7C6.45 15 6 14.55 6 14C6 13.45 6.45 13 7 13H13C13.55 13 14 13.45 14 14C14 14.55 13.55 15 13 15ZM17 9H7C6.45 9 6 8.55 6 8C6 7.45 6.45 7 7 7H17C17.55 7 18 7.45 18 8C18 8.55 17.55 9 17 9Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'phone': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.23 15.2598L16.69 14.9698C16.08 14.8998 15.48 15.1098 15.05 15.5398L13.21 17.3798C10.38 15.9398 8.06004 13.6298 6.62004 10.7898L8.47004 8.93976C8.90004 8.50977 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.63004 3.76977 7.78004 3.00977 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'videocam': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L19.29 15.79C19.92 16.42 21 15.97 21 15.08V8.91C21 8.02 19.92 7.57 19.29 8.2L17 10.5Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'block': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'volume-off': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.53253 7.33998C6.20287 7.03302 6.20287 6.53717 6.53253 6.23022C6.87065 5.92326 7.40318 5.92326 7.73285 6.23022L10.8234 9.10974L12.1622 7.86731C12.6947 7.37146 13.6076 7.71777 13.6076 8.41826V11.7039L17.7474 15.5628C18.077 15.8697 18.0877 16.3755 17.758 16.6824C17.4283 16.9894 16.8958 16.9894 16.5662 16.6824L13.6076 13.9277L9.6263 10.2206L6.53253 7.33998ZM8.53588 10.4468L6.84529 10.4568C6.38038 10.4568 6 10.8109 6 11.2438V14.3921C6 14.825 6.38038 15.1791 6.84529 15.1791H9.38117L12.1622 17.7686C12.6947 18.2644 13.6076 17.9103 13.6076 17.2098V15.1692L8.53588 10.4468Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'add-photo': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 8V6H17V4H19V2H21V4H23V6H21V8H19ZM3 22C2.45 22 1.97917 21.8042 1.5875 21.4125C1.19583 21.0208 1 20.55 1 20V8C1 7.45 1.19583 6.97917 1.5875 6.5875C1.97917 6.19583 2.45 6 3 6H6.15L8 4H14V6H8.875L7.05 8H3V20H19V11H21V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H3ZM11 18.5C12.25 18.5 13.3125 18.0625 14.1875 17.1875C15.0625 16.3125 15.5 15.25 15.5 14C15.5 12.75 15.0625 11.6875 14.1875 10.8125C13.3125 9.9375 12.25 9.5 11 9.5C9.75 9.5 8.6875 9.9375 7.8125 10.8125C6.9375 11.6875 6.5 12.75 6.5 14C6.5 15.25 6.9375 16.3125 7.8125 17.1875C8.6875 18.0625 9.75 18.5 11 18.5ZM11 16.5C10.3 16.5 9.70833 16.2583 9.225 15.775C8.74167 15.2917 8.5 14.7 8.5 14C8.5 13.3 8.74167 12.7083 9.225 12.225C9.70833 11.7417 10.3 11.5 11 11.5C11.7 11.5 12.2917 11.7417 12.775 12.225C13.2583 12.7083 13.5 13.3 13.5 14C13.5 14.7 13.2583 15.2917 12.775 15.775C12.2917 16.2583 11.7 16.5 11 16.5Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'add-image': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H14V5H5V19H19V10H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM17 9V7H15V5H17V3H19V5H21V7H19V9H17ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'gallery': {
            return (
                <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 34.8889V13.1111C38 11.4 36.6 10 34.8889 10H13.1111C11.4 10 10 11.4 10 13.1111V34.8889C10 36.6 11.4 38 13.1111 38H34.8889C36.6 38 38 36.6 38 34.8889ZM19.1778 27.08L22.4444 31.0156L27.2667 24.8089C27.5778 24.4044 28.2 24.4044 28.5111 24.8244L33.9711 32.1044C34.36 32.6178 33.9867 33.3489 33.3489 33.3489H14.6978C14.0444 33.3489 13.6867 32.6022 14.0911 32.0889L17.9644 27.1111C18.26 26.7067 18.8511 26.6911 19.1778 27.08Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'camera': {
            return (
                <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 29.5C26.4853 29.5 28.5 27.4853 28.5 25C28.5 22.5147 26.4853 20.5 24 20.5C21.5147 20.5 19.5 22.5147 19.5 25C19.5 27.4853 21.5147 29.5 24 29.5Z"
                        fill="#2A313C"
                    />
                    <path
                        d="M36 13H31.245L29.385 10.975C28.83 10.36 28.02 10 27.18 10H20.82C19.98 10 19.17 10.36 18.6 10.975L16.755 13H12C10.35 13 9 14.35 9 16V34C9 35.65 10.35 37 12 37H36C37.65 37 39 35.65 39 34V16C39 14.35 37.65 13 36 13ZM24 32.5C19.86 32.5 16.5 29.14 16.5 25C16.5 20.86 19.86 17.5 24 17.5C28.14 17.5 31.5 20.86 31.5 25C31.5 29.14 28.14 32.5 24 32.5Z"
                        fill="#2A313C"
                    />
                </svg>
            );
        }
        case 'email': {
            return (
                <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2 12.7998H12.8C11.26 12.7998 10.014 14.0598 10.014 15.5998L10 32.3998C10 33.9398 11.26 35.1998 12.8 35.1998H35.2C36.74 35.1998 38 33.9398 38 32.3998V15.5998C38 14.0598 36.74 12.7998 35.2 12.7998ZM34.64 18.7498L24.742 24.9378C24.294 25.2178 23.706 25.2178 23.258 24.9378L13.36 18.7498C13.01 18.5258 12.8 18.1478 12.8 17.7418C12.8 16.8038 13.822 16.2438 14.62 16.7338L24 22.5998L33.38 16.7338C34.178 16.2438 35.2 16.8038 35.2 17.7418C35.2 18.1478 34.99 18.5258 34.64 18.7498Z" />
                </svg>
            );
        }
        case 'contacts': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7428 9.51888C13.6875 9.43172 13.6914 9.32184 13.7418 9.23184C14.1561 8.49669 14.3913 7.64782 14.3913 6.74119C14.3913 6.42666 14.3637 6.11969 14.3084 5.81937C14.2903 5.72085 14.3208 5.61853 14.398 5.55316C14.9265 5.10695 15.6104 4.84645 16.3437 4.84645C18.3598 4.84645 19.9311 6.78946 19.2645 8.87461C18.975 9.77935 18.2321 10.5136 17.3208 10.7969C15.8456 11.2554 14.4437 10.6273 13.7428 9.51888ZM17.8188 12.2179H15.9313C15.678 12.2179 15.5474 12.5239 15.7312 12.6982C17.0836 13.979 17.715 15.8255 17.715 17.6558V18.7736C17.715 18.9309 17.8426 19.0579 18.0007 19.0579H21.5243C21.7872 19.0579 22.0005 18.8457 22.0005 18.5842V16.3864C21.9995 14.4632 20.9044 12.2179 17.8188 12.2179ZM9.15162 10.5316C11.2525 10.5316 12.961 8.83201 12.961 6.74211C12.961 4.65222 11.2525 2.95264 9.15162 2.95264C7.05076 2.95264 5.34227 4.65222 5.34227 6.74211C5.34227 8.83201 7.05076 10.5316 9.15162 10.5316ZM11.0477 12.4263H7.23834C3.37185 12.4263 2.00049 15.2429 2.00049 17.6549V20.479C2.00049 20.7404 2.21381 20.9526 2.47666 20.9526H15.8094C16.0722 20.9526 16.2855 20.7404 16.2855 20.479V17.6549C16.2855 15.2429 14.9142 12.4263 11.0477 12.4263Z" />
                </svg>
            );
        }
        case 'messages': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C10.1074 2.00016 8.25373 2.53734 6.65431 3.54913C5.05488 4.56092 3.77539 6.00578 2.96449 7.71584C2.15359 9.42591 1.84457 11.331 2.07333 13.2097C2.3021 15.0884 3.05926 16.8636 4.25684 18.3291L2.293 20.293C2.15315 20.4328 2.0579 20.611 2.01931 20.805C1.98072 20.9989 2.00051 21.2 2.07619 21.3827C2.15187 21.5654 2.28003 21.7216 2.44447 21.8315C2.60891 21.9414 2.80223 22 3 22H12C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM9 7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9H9C8.73479 9 8.48043 8.89464 8.2929 8.70711C8.10536 8.51957 8 8.26522 8 8C8 7.73478 8.10536 7.48043 8.2929 7.29289C8.48043 7.10536 8.73479 7 9 7ZM15 17H9C8.73479 17 8.48043 16.8946 8.2929 16.7071C8.10536 16.5196 8 16.2652 8 16C8 15.7348 8.10536 15.4804 8.2929 15.2929C8.48043 15.1054 8.73479 15 9 15H15C15.2652 15 15.5196 15.1054 15.7071 15.2929C15.8946 15.4804 16 15.7348 16 16C16 16.2652 15.8946 16.5196 15.7071 16.7071C15.5196 16.8946 15.2652 17 15 17ZM17 13H7C6.73479 13 6.48043 12.8946 6.2929 12.7071C6.10536 12.5196 6 12.2652 6 12C6 11.7348 6.10536 11.4804 6.2929 11.2929C6.48043 11.1054 6.73479 11 7 11H17C17.2652 11 17.5196 11.1054 17.7071 11.2929C17.8946 11.4804 18 11.7348 18 12C18 12.2652 17.8946 12.5196 17.7071 12.7071C17.5196 12.8946 17.2652 13 17 13Z" />
                </svg>
            );
        }
        case 'tasks': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 15.5V17C17 17.6 16.6 18 16 18C15.4 18 15 17.6 15 17V15.5H9V17C9 17.6 8.6 18 8 18C7.4 18 7 17.6 7 17V15.5H5C4.3 15.5 3.6 15.3 3 15V19C3 20.7 4.3 22 6 22H18C19.7 22 21 20.7 21 19V15C20.4 15.3 19.7 15.5 19 15.5H17ZM21 6H17V5C17 3.3 15.7 2 14 2H10C8.3 2 7 3.3 7 5V6H3C2.4 6 2 6.4 2 7V11C2 12.7 3.3 14 5 14H19C20.7 14 22 12.7 22 11V7C22 6.4 21.6 6 21 6ZM15 6H9V5C9 4.4 9.4 4 10 4H14C14.6 4 15 4.4 15 5V6Z" />
                </svg>
            );
        }
        case 'profile': {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM15.0207 8.81395C15.0207 7.15658 13.6695 5.8125 12.002 5.8125C10.3353 5.8125 8.98407 7.15658 8.98407 8.81395C8.98407 10.4717 10.3353 11.8154 12.002 11.8154C13.6695 11.8154 15.0207 10.4717 15.0207 8.81395ZM7.63885 17.2758C8.81371 18.2727 10.3369 18.875 12 18.875C13.6635 18.875 15.1871 18.2727 16.3616 17.2754C16.6482 17.0327 16.8125 16.6775 16.8125 16.3036C16.8125 14.6227 15.4496 13.2775 13.7585 13.2775H10.2463C8.55557 13.2775 7.1875 14.6227 7.1875 16.3036C7.1875 16.6771 7.35265 17.0331 7.63885 17.2758Z"
                    />
                </svg>
            );
        }

        default:
            return null;
    }
}

export default BaseIcons;
