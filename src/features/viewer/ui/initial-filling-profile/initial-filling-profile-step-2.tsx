import React from 'react';
import { useNavigate } from 'react-router-dom';

import { viewerApi, InitialFillingProfileStep2View, yup } from 'entities/viewer';
import { Input } from 'shared/ui';

function InitialFillingProfileStep2() {
    const navigate = useNavigate();

    const { data } = viewerApi.handleGetViewer();
    const { mutate: handleEditProfile } = viewerApi.handleEditProfile();

    const firstNameInput = Input.use({
        yupSchema: yup.checkName,
        initialValue: data?.data?.data.first_name || '',
    });
    const lastNameInput = Input.use({
        yupSchema: yup.checkName,
        initialValue: data?.data?.data.last_name || '',
    });

    const onsubmit = async () => {
        const fnInput = await firstNameInput.asyncValidate();
        const lnInput = await lastNameInput.asyncValidate();
        if (!fnInput.error && !lnInput.error) {
            handleEditProfile(
                { first_name: fnInput.value, last_name: lnInput.value },
                {
                    onSuccess: () => navigate('/filling_profile/step3'),
                }
            );
        }
    };
    return <InitialFillingProfileStep2View handleSubmit={onsubmit} inputs={{ lastName: lastNameInput, firstName: firstNameInput }} />;
}

export default InitialFillingProfileStep2;
