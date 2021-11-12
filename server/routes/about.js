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
    // Object.assign(appMetadata, {
    //   builtTime: timestamp
    //     ? new Date(Number(timestamp) * MILLISECONDS_PER_SECOND)
    //     : new Date(),
    //   currentServerTime: new Date(),
    //   version: process.env.IMAGE_TAG,
    //   commit: process.env.GIT_REF,
    //   _links: {
    //     health: {
    //       href: "/health",
    //     },
    //   },
    // })
    console.log("env Variable", process.env);
    console.log("timeStamp", timestamp);
    console.log("appMetadata", appMetadata);
    res.status(200).json({
      version: process.env.IMAGE_TAG || "Version not found",
      commit: process.env.GIT_REF || "Commit id not found",
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
