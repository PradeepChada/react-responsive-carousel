const PropertiesReader = require("properties-reader");
const fs = require("fs");
const path = require("path");

const MILLISECONDS_PER_SECOND = 1000;

const defaultDependenciesFirst = {
  fileSystem: fs,
  propertiesReader: PropertiesReader,
};

function applicationMetadataReader(dependencies = {}) {
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
const applicationMetadata = applicationMetadataReader();

const appDetails = (req, res) => {
  const defaultDependencies = {
    appMetadata: applicationMetadata,
  };
  const { appMetadata } = {
    ...defaultDependencies,
  };
  if (appMetadata) {
    const timestamp = appMetadata["build.timestamp"];
    console.log("appMetadata=>>", appMetadata);
    console.log("version=>>", appMetadata?.build?.version);
    console.log("commit=>>", appMetadata?.build?.scmRevision.id);
    res.status(200).json({
      version: appMetadata?.build?.version || "Version not found",
      commit: appMetadata?.build?.scmRevision.id || "Commit id not found",
      buildTime: timestamp
        ? new Date(Number(timestamp)).toUTCString()
        : new Date().toUTCString(),
      startTime: new Date(),
      _links: {
        health: {
          href: "/health",
        },
      },
    });
  } else {
    res
      .status(200)
      .json({ status: "message: 'unable to find build.properties'" });
  }
};

module.exports = {
  appDetails,
};
