import React, { useEffect, useState } from 'react';
import { initializeAppConfig } from '../../config';

const ConfigProvider = ({children}) => {
    const [configSuccess, setConfigSuccess] = useState(false);
    const [configError, setConfigError] = useState(false);
    const fetchConfig = () => {
        initializeAppConfig()
        .then(() => {
            setConfigSuccess(true)
        })
        .catch(() => {
            setConfigError(true)
        })
    }

    useEffect(() => {
        fetchConfig()
    }, [])

    return (
        configSuccess ? children : configError ? "COnfig Error" : null
    )

}

export default ConfigProvider;