import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from 'shared/ui';
import { HeaderMainPage } from 'widgets/main-page';

import styles from './styles.module.scss';
import { appObserver } from '../../../entities/app';
import Wrapper from '../../wrapper';

function MainPage() {
    appObserver();

    return (
        <Wrapper>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderMainPage />
                </div>
                <Box.Animated presenceProps={{ mode: 'wait' }} visible className={styles.outlet}>
                    <Outlet />
                </Box.Animated>
            </div>
        </Wrapper>
    );
}

export default MainPage;
