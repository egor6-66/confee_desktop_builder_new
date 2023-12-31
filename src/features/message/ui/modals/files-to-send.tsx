import React from 'react';
import { useParams } from 'react-router';

import { FilesToSendModalView, messageApi, messageTypes } from 'entities/message';
import { UseFileUploaderTypes, useFileUploader, useArray } from 'shared/hooks';
import { getRandomInt, compressImage } from 'shared/lib';
import { Modal, ModalTypes, CardTypes } from 'shared/ui';

type Props = {
    modal: ModalTypes.UseReturnedType;
    files: UseFileUploaderTypes.Types.SortBuAcceptType;
    onClose: () => void;
};

function FilesToSendModal(props: Props) {
    const { modal, files, onClose } = props;
    const params = useParams();
    const chatId = Number(params.chat_id);

    const { mutate: handleSendFileMessage } = messageApi.handleSendFileMessage();

    const images = useArray<UseFileUploaderTypes.Types.ImageFile>({ initialArr: files.image });
    const audios = useArray<UseFileUploaderTypes.Types.AudioFile>({ initialArr: files.audio });
    const videos = useArray<UseFileUploaderTypes.Types.VideoFile>({ initialArr: files.video });
    const documents = useArray<UseFileUploaderTypes.Types.DocumentFile>({ initialArr: files.document });

    const close = () => {
        modal.close();
        onClose();
    };

    const sendFiles = async () => {
        const send = async (arr: any[], type: messageTypes.MediaContentType) => {
            // return new Promise((resolve, reject) => {
            const formData = new FormData();

            await Promise.all(
                arr.map(async (i) => {
                    if (type === 'images') {
                        const compressed = await compressImage(i.file, i?.name, 10);
                        formData.append(`files[${type}][]`, compressed);
                    } else {
                        formData.append(`files[${type}][]`, i.file);
                    }
                })
            );
            handleSendFileMessage(
                {
                    chatId,
                    files: formData,
                    filesForMock: arr.map((i) => ({ id: getRandomInt(100), url: i.fileUrl, name: i.name })),
                    filesType: type,
                },
                {
                    onSuccess: (data) => {
                        console.log('success');
                    },
                }
            );
            // });
        };
        if (images.array.length) {
            await send(images.array, 'images');
        }
        if (audios.array.length) {
            await send(audios.array, 'audios');
        }
        if (videos.array.length) {
            await send(videos.array, 'videos');
        }
        if (documents.array.length) {
            await send(documents.array, 'documents');
        }
        close();
    };

    const { open: openFilesDownloader } = useFileUploader({
        accept: 'all',
        multiple: true,
        onAfterUploading: (data) => {
            if (data.sortByAccept) {
                Object.entries(data.sortByAccept).forEach(([key, value]) => {
                    switch (key) {
                        case 'image':
                            return images.concat(value);
                        case 'audio':
                            return audios.concat(value as any);
                        case 'video':
                            return videos.concat(value as any);
                        case 'document':
                            return documents.concat(value);
                    }
                });
            }
        },
    });

    return (
        <FilesToSendModalView
            sendFiles={sendFiles}
            close={close}
            addFiles={openFilesDownloader}
            images={images}
            audios={audios}
            videos={videos}
            documents={documents}
        />
    );
}

export default function (props: Props) {
    return (
        <Modal {...props.modal}>
            <FilesToSendModal {...props} />
        </Modal>
    );
}
