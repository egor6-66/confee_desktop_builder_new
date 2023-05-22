import React, { forwardRef, useState } from 'react';

import Icons from './icons';
import styles from './wrapper/styles.module.scss';
import Wrapper from './wrapper/wrapper';
import { PasswordInputProps } from '../types';

const Input = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
    const { active, loading, width, height, error, size, disabled, title, errorTitle, ...other } = props;
    const [showPass, toggleShowPass] = useState<boolean>(false);

    return (
        <Wrapper
            width={width}
            height={height}
            title={title}
            errorTitle={errorTitle}
            loading={loading}
            error={error}
            size={size}
            disabled={disabled}
            active={active}
        >
            <input type={showPass ? 'text' : 'password'} ref={ref} className={styles.input} {...other} />
            <div onClick={() => toggleShowPass((prev) => !prev)}>
                <Icons variants={showPass ? 'visiblePass' : 'hiddenPass'} />
            </div>
        </Wrapper>
    );
});

export default Input;
