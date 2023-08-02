import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserStore, userTypes } from 'entities/user';
import { useViewerStore } from 'entities/viewer';
import { ChatsList } from 'features/chat';
import { useFileDownloads, useFileUploader } from 'shared/hooks';
import { Button, Notification, Modal } from 'shared/ui';

import styles from './styles.module.scss';
import ImagesMessage from '../../../../../entities/message/ui/message/variants/images';
import { viewerTypes } from '../../../../../entities/viewer';

function LeftSidebar() {
    const navigate = useNavigate();

    const notification = Notification.use();

    const confirmModal = Modal.use<viewerTypes.ModalName>('viewer-personal-info');
    // const confirmModal = Modal.use<>();

    const { Uploader, files } = useFileUploader({
        accept: 'image',
        multiple: true,
    });

    const click = () => {
        confirmModal.open();
        // setOpenUserModal('personal-info');
        // notification.success({ title: 'wd', callback: () => console.log('wdawd') });
    };

    return (
        <div className={styles.wrapper}>
            <Button onClick={click}>ff</Button>
            <div className={styles.list}>
                <ChatsList />
            </div>
        </div>
    );
}

export default LeftSidebar;
