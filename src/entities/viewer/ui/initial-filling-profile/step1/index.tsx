import React from 'react';

import { Box, Button, Input, InputTypes } from 'shared/ui';

import styles from './styles.module.scss';

type Props = {
    handleSubmit: (arg: string) => void;
    nicknameInput: InputTypes.UseReturnedType;
};

function InitialFillingProfileStep1View(props: Props) {
    const { nicknameInput, handleSubmit } = props;

    return (
        <Box.Animated visible className={styles.wrapper}>
            <div className={styles.description}>
                <div className={styles.title}>Придумайте никнейм</div>
                <div className={styles.subtitle}>Уникальный идентификатор, по которому вас можно найти</div>
            </div>
            <div className={styles.input}>
                <Input placeholder="nickname" maxLength={20} {...nicknameInput} prefix="@" clearIcon size="m" width="100%" />
            </div>
            <div className={styles.help}>Можно использовать символы a-z, 0-9 и подчёркивания. Минимальная длина − 5 символов, максимальная − 20.</div>

            <Button disabled={nicknameInput.error} onClick={() => handleSubmit(nicknameInput.value)} size="m" width="100%">
                Далее
            </Button>
        </Box.Animated>
    );
}

export default InitialFillingProfileStep1View;
