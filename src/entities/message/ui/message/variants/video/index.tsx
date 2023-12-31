import React from 'react';

import { BaseTypes } from 'shared/types';
import { Image, VideoPlayer } from 'shared/ui';

import styles from './styles.module.scss';
import { useEasyState } from '../../../../../../shared/hooks';
import { File } from '../../../../model/types';

type Props = {
    videos: File[];
} & BaseTypes.Statuses;

function VideoMessage(props: Props) {
    const { videos } = props;
    const swiperState = useEasyState<{ visible: boolean; initial: number }>({ visible: false, initial: 1 });

    const updItems = videos?.map((i, index) => ({
        id: i.id,
        url: i.url || '',
        height: 'auto',
        onClick: () => swiperState.set({ visible: true, initial: index }),
    }));

    return (
        <>
            <VideoPlayer.Swiper
                initialSlide={swiperState.value.initial}
                closeClick={() => swiperState.set({ visible: false, initial: 1 })}
                visible={swiperState.value.visible}
                items={updItems}
            />
            <div className={styles.wrapper}>
                <VideoPlayer.List items={updItems} style={{ maxWidth: updItems && updItems?.length < 2 ? '250px' : '360px' }} />
            </div>
        </>
    );
}

export default VideoMessage;
