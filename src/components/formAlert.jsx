import React, { useRef } from 'react'

import "./formAlert.css"
import { useTranslation } from "react-i18next"

export default function FormAlert(props) {

    if (responseWasOk(props)) {
        return <SuccessfullyMessage name={props?.props.name} />;
    } else {
        return <SomethingWentWrong name={props?.props.name} />;
    }
}

function SuccessfullyMessage(name) {

    const formAlertContainerRef = useRef(null);
    const formAlertRef = useRef(null);

    setTimeout(() => {
        if (formAlertContainerRef.current && formAlertRef.current) {
            formAlertContainerRef.current.classList.add('hide__container');
            formAlertRef.current.classList.add('hide__alert');
        }
    }, 5000);

    const nameToPrint = name.name;
    const { t } = useTranslation(["alertMessages"])
    return (
        <div ref={formAlertContainerRef} className='formAlert__container'>
            <div ref={formAlertRef} className='formAlert'>
                <div className='ok'>
                    <div className='label-color-status'></div>
                    <div className='formAlert__body '>
                        <h2>{t('server_message')}</h2>
                        <p>{t('server_message-ok', { name: nameToPrint })}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SomethingWentWrong(name) {
    const formAlertContainerRef = useRef(null);
    const formAlertRef = useRef(null);

    setTimeout(() => {
        if (formAlertContainerRef.current && formAlertRef.current) {
            formAlertContainerRef.current.classList.add('hide__container');
            formAlertRef.current.classList.add('hide__alert');
        }
    }, 5000);

    const nameToPrint = name.name;
    const { t } = useTranslation(["alertMessages"])
    return (
        <div ref={formAlertContainerRef} className='formAlert__container'>
            <div ref={formAlertRef} className='formAlert'>
                <div className='bad'>
                    <div className='label-color-status'></div>
                    <div className='formAlert__body '>
                        <h2>{t('server_message')}</h2>
                        <p>{t('server_message-bad', { name: nameToPrint })}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function responseWasOk(props) {
    if (props?.props.responseData?.success) return true;
    return false;
}
