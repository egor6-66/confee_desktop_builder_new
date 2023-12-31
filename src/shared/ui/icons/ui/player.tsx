import React from 'react';

import { PlayerIconsProps } from '../types';

function Player(props: PlayerIconsProps) {
    const { variant } = props;

    switch (variant) {
        case 'play': {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <path d="M405.2 232.9L126.8 67.2c-3.4-2-6.9-3.2-10.9-3.2-10.9 0-19.8 9-19.8 20H96v344h.1c0 11 8.9 20 19.8 20 4.1 0 7.5-1.4 11.2-3.4l278.1-165.5c6.6-5.5 10.8-13.8 10.8-23.1s-4.2-17.5-10.8-23.1z" />
                </svg>
            );
        }
        case 'full': {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M13.9 4.1v-2h8v8h-2V5.516l-5.779 5.778-1.414-1.414L18.485 4.1H13.9zM4.1 13.9h-2v8h8v-2H5.516l5.778-5.779-1.414-1.414L4.1 18.485V13.9z" />
                </svg>
            );
        }
        case 'mute': {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21.707 20.293l-2.023-2.023A9.566 9.566 0 0021.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 01-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 00-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 001.027.05A1 1 0 0014 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 00-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 002 9v6c0 1.103.897 2 2 2z" />
                </svg>
            );
        }
        case 'unmute': {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 8C16.259 8.94427 17 10.4262 17 12C17 13.5738 16.259 15.0557 15 16"
                        stroke="#EFF2F7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.7002 5C19.8146 6.70868 21.0433 9.28151 21.0433 12C21.0433 14.7185 19.8146 17.2913 17.7002 19"
                        stroke="#EFF2F7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 15.0003H4C3.44772 15.0003 3 14.5526 3 14.0003V10.0003C3 9.44805 3.44772 9.00033 4 9.00033H6L9.5 4.50033C9.6806 4.14955 10.09 3.98281 10.4643 4.10758C10.8385 4.23234 11.066 4.61135 11 5.00033V19.0003C11.066 19.3893 10.8385 19.7683 10.4643 19.8931C10.09 20.0179 9.6806 19.8511 9.5 19.5003L6 15.0003"
                        stroke="#EFF2F7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        }
        case 'pause': {
            return (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M272 63.1h-32c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48l32 1.8c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48.9-48-48.9zm-192 0H48c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448h32c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48.9-48-48.9z" />
                </svg>
            );
        }
        case 'stop': {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z" />
                </svg>
            );
        }
        default:
            return null;
    }
}

export default Player;
