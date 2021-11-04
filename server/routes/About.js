const PropertiesReader = require("properties-reader");
const fs = require("fs");
const path = require("path");

const MILLISECONDS_PER_SECOND = 1000;

const defaultDependenciesFirst = {
  fileSystem: fs,
  propertiesReader: PropertiesReader,
};

function applicationMetadataReader(buildPropertiesPath, dependencies = {}) {
  const { fileSystem, propertiesReader } = {
    ...defaultDependenciesFirst,
    ...dependencies,
  };

  if (fileSystem.existsSync(buildPropertiesPath)) {
    const properties = propertiesReader(buildPropertiesPath);
    return properties.getAllProperties();
  }
  return {
    message: "Missing application metadata",
  };
}

const buildPropertiesPath = path.resolve(process.cwd(), "build.properties");
const applicationMetadata = applicationMetadataReader(buildPropertiesPath);

const appDetails = (req, res) => {
  const defaultDependencies = {
    appMetadata: applicationMetadata,
  };
  const { appMetadata } = {
    ...defaultDependencies,
  };
  if (appMetadata) {
    const timestamp = appMetadata["build.timestamp"];
    res.status(200).json(
      Object.assign(appMetadata, {
        builtOn: timestamp
          ? new Date(Number(timestamp) * MILLISECONDS_PER_SECOND)
          : new Date(),
        currentServerTime: new Date(),
      })
    );
  } else
    res
      .status(200)
      .json({ status: "message: 'unable to find build.properties'" });
};

module.exports = {
  appDetails
}

