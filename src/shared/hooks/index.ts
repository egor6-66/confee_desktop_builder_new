import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    useDebounce,
    useClickAway,
    useScrolling,
    usePrevious,
    useWindowSize,
    useScroll,
    useLocation,
    useEffectOnce,
    useCopyToClipboard,
    useIdle,
    useNetworkState,
} from 'react-use';
import useDownloader from 'react-use-downloader';
import useFileUploader from 'react-use-file-uploader';
import { useTimer } from 'use-timer';

import useArray from './useArray';
import useAudioRecorder from './useAudioRecord';
import useCreateSelectors from './useCreateSelectors';
import useCrypto from './useCrypto';
import useDate from './useDate';
import useEnding from './useEnding';
import useFileDownloads from './useFileDownloads';
import useInput from './useInput';
import useMedia from './useMedia';
import useModal from './useModal';
import useRandomString from './useRandomString';
import useReverseTimer from './useReverseTimer';
import useRouter from './useRouter';
import useRowAndDropdown from './useRowAndDropdown';
import useScrollTo from './useScroll';
import useSize from './useSize';
import useStyles from './useStyles';
import useTheme from './useTheme';
import useToggle from './useToggle';
import useWebSocket from './useWebSocket';
import ConfigMediaQuery from '../configs/media-query';

const { useWidthMediaQuery, useHeightMediaQuery } = ConfigMediaQuery;
export {
    useRouter,
    useWidthMediaQuery,
    useHeightMediaQuery,
    useModal,
    useRandomString,
    useDownloader,
    useFileDownloads,
    useNetworkState,
    useIdle,
    useTimer,
    useTheme,
    useInput,
    useCreateSelectors,
    useCrypto,
    useDebounce,
    useToggle,
    useClickAway,
    useStyles,
    useScrolling,
    useSize,
    useMedia,
    useRowAndDropdown,
    useArray,
    usePrevious,
    useEnding,
    useWindowSize,
    useDate,
    useScroll,
    useScrollTo,
    useReverseTimer,
    useInView,
    useAnimation,
    useLocation,
    useEffectOnce,
    useCopyToClipboard,
    useFileUploader,
    useAudioRecorder,
    useWebSocket,
};

export type UseInputReturnedTypes = ReturnType<typeof useInput>;
