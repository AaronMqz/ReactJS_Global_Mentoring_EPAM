// I used webpack-merge to avoid duplicating webpack configurations between environments
const { merge } = require("webpack-merge");

const sharedConfig = require("./config/shared.config");
const devConfig = require("./config/dev.config");
const prodConfig = require("./config/prod.config");

module.exports =
  process.env.NODE_ENV === "DEV"
    ? merge(sharedConfig, devConfig)
    : merge(sharedConfig, prodConfig);
