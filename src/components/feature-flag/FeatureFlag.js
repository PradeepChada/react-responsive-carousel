import config from './../../config';

const FeatureFlag = ({ children }) => {
  const { features } = config.appConfig;
  const show = features?.[children?.props?.['data-feature']] !== false;
  return show ? children : null;
};

export default FeatureFlag;
