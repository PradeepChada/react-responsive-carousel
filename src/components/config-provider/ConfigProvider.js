import { useEffect, useState } from 'react';
import { initializeAppConfig } from '../../config';

const ConfigProvider = ({ children }) => {
  const [configSuccess, setConfigSuccess] = useState(false);
  const [configError, setConfigError] = useState(false);
  const fetchConfig = () => {
    initializeAppConfig()
      .then(() => {
        setConfigSuccess(true);
      })
      .catch(() => {
        setConfigError(true);
      });
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  if (configSuccess) {
    return children;
  } else {
    return configError ? 'Config Error' : null;
  }
};

export default ConfigProvider;
