import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from 'shared/ui';

import styles from './styles.module.scss';
import { appObserver, AppGateway } from '../../../entities/app';

function MainPage() {
    appObserver();

    return (
        <div className={styles.wrapper}>
            <div className={styles.header} />
            <Box.Animated presenceProps={{ mode: 'wait' }} visible className={styles.outlet}>
                <Outlet />
            </Box.Animated>
        </div>
    );
}

export default MainPage;
