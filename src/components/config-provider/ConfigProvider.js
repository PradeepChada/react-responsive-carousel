import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import config from '../../config';

const ConfigProvider = ({ children }) => {
  const [configSuccess, setConfigSuccess] = useState(false);
  const [configError, setConfigError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchConfig = () => {
    setLoading(true);
    config
      .initializeAppConfig()
      .then(() => {
        setLoading(false);
        setConfigSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setConfigError(true);
      });
  };

  useEffect(() => {
    fetchConfig();
  }, []);
  if (loading) {
    return (
      <Box
        display={'flex'}
        height='100vh'
        flexGrow={1}
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
      >
        <CircularProgress />
        <Typography variant='caption' sx={{ marginTop: 2 }}>
          Loading Configurations...
        </Typography>
      </Box>
    );
  } else if (configSuccess) {
    return children;
  } else {
    return configError ? 'Config Error' : null;
  }
};

export default ConfigProvider;
