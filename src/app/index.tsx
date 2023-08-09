import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import produce from 'immer';
import moment from 'moment';
import React, { useEffect } from 'react';
import OneSignal from 'react-onesignal';
import { BrowserRouter } from 'react-router-dom';
import 'moment/locale/ru';

import Routing from 'pages';
import './index.scss';
import { useWebSocket, useTheme } from 'shared/hooks';
import { Notification, Modal } from 'shared/ui';

import { appService } from '../entities/app';

const queryClient = new QueryClient();
moment.locale('ru');

function App() {
    const notification = Notification.use();
    useTheme();
    const { onMessage } = useWebSocket();
    const { clientBaseURL } = appService.getUrls();
    useEffect(() => {
        OneSignal.init({ appId: '977e9b8a-5cf3-401b-b801-3c62e346cfde' }).then(() => {
            // OneSignal.getUserId().then(async (res) => {
            //     res && (await handleSendOneSignalToken({ onesignal_player_id: res }));
            //     window.location.href = '/main/chats';
            // });
        });
        onMessage('all', (socketData) => {
            console.log(socketData);
            // notification.success({ title: 'test', scope: 'all' });
        });
    }, []);
    console.log('clientBaseURL: ', clientBaseURL);
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Modal.Confirm />
                <Notification />
                <Routing />
                <ReactQueryDevtools position="bottom-right" />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
