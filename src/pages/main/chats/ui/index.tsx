import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useParams } from 'react-router';
import { Outlet, useLocation } from 'react-router-dom';

import { chatGateway, useChatStore } from 'entities/chat';
import { useHeightMediaQuery, useWidthMediaQuery, useRouter } from 'shared/hooks';
import { Box } from 'shared/ui';

import styles from './styles.module.scss';
import { messageGateway } from '../../../../entities/message';
import Modals from '../modals';
import { LeftSidebar, Chat, RightSidebar } from '../widgets';

function ChatsPage() {
    chatGateway();
    messageGateway();

    const openRightSidebar = useChatStore.use.openRightSidebar();

    const { params } = useRouter();

    const { to, from } = useWidthMediaQuery();

    const isVisibleLeftSidebar = () => {
        if (to('sm')) {
            return !params.chat_id && !openRightSidebar;
        }
        return true;
    };

    const isVisibleOutlet = () => {
        if (to('sm')) {
            return !!params.chat_id && !openRightSidebar;
        }
        return true;
    };

    return (
        <>
            <Modals />
            <Box.Animated visible className={styles.wrapper}>
                {isVisibleLeftSidebar() && <LeftSidebar />}
                {isVisibleOutlet() && <Outlet />}
                <Box.Animated className={styles.rightSidebar} visible={openRightSidebar} animationVariant={to('md') ? 'visibleHidden' : 'autoWidth'}>
                    <RightSidebar />
                </Box.Animated>
            </Box.Animated>
        </>
    );
}

export default ChatsPage;
