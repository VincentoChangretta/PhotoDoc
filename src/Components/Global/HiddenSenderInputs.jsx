import React from 'react';

export const HiddenSenderInputs = () => {
    return (
        <>
            <input type="hidden" name="project_name" value="info@photodoc.online" />
            <input type="hidden" name="admin_email" value="photodoc.online@mail.ru" />
            <input type="hidden" name="form_subject" value="uniForm" />
        </>
    );
}
