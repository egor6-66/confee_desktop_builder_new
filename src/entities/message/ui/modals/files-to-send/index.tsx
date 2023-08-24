import React, { ReactNode, useState } from 'react';

import { createMemo, useArray, UseArrayReturnType, UseEasyStateReturnType, UseFileUploaderTypes } from 'shared/hooks';
import { sizeConverter } from 'shared/lib';
import { BaseTypes } from 'shared/types';
import { Button, Card, Document, Icons, Image, Input, TabBar, Title } from 'shared/ui';

import styles from './styles.module.scss';
import UseArray from '../../../../../shared/hooks/useArray';
import { MessageType } from '../../../model/types';

type Props = {
    images: UseArrayReturnType<UseFileUploaderTypes.Types.ImageFile>;
    audios: UseArrayReturnType<UseFileUploaderTypes.Types.AudioFile>;
    documents: UseArrayReturnType<UseFileUploaderTypes.Types.DocumentFile>;
    videos: UseArrayReturnType<UseFileUploaderTypes.Types.VideoFile>;
    addFiles: () => void;
} & BaseTypes.Statuses;

function FilesToSendModalView(props: Props) {
    const { images, documents, audios, videos, addFiles } = props;
    console.log(images);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Title variant="H2">Отправить как файл</Title>
            </div>
            <div className={styles.list}>
                {documents.array.length
                    ? documents.array.map((i) => (
                          <Item key={i.id} remove={() => documents.deleteById(i.id)}>
                              <Document url={i.fileUrl} name={i.name} size={+i.size} />
                          </Item>
                      ))
                    : null}
                {images.array.length
                    ? images.array.map((i) => (
                          <Item key={i.id} remove={() => images.deleteById(i.id)}>
                              <Image.Card url={i.fileUrl} name={i.name} size={+i.size} />
                          </Item>
                      ))
                    : null}
                {audios.array.length
                    ? audios.array.map((i) => (
                          <Item key={i.id} remove={() => audios.deleteById(i.id)}>
                              audios
                          </Item>
                      ))
                    : null}
                {videos.array.length
                    ? videos.array.map((i) => (
                          <Item key={i.id} remove={() => videos.deleteById(i.id)}>
                              videos
                          </Item>
                      ))
                    : null}
            </div>
            <div className={styles.footer}>
                <Button variant="inherit" active width="25%" onClick={addFiles}>
                    Добавить
                </Button>
                <div className={styles.confirm}>
                    <Button variant="inherit" active>
                        Отмена
                    </Button>
                    <Button variant="inherit" active>
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Item(props: { children: ReactNode; remove: () => void }) {
    const { children, remove } = props;
    return (
        <div className={styles.item}>
            <div className={styles.children}>{children}</div>
            <Button.Circle onClick={remove} radius={30} variant="inherit" className={styles.deleteIcon}>
                <Icons variant="delete" />
            </Button.Circle>
        </div>
    );
}

export default FilesToSendModalView;
