const package = require("../package.json");

module.exports = async (req, res) => {
  res.json({
    alive: true,
    made_by: "https://github.com/Coderaryan-offical",
    version: package.version,
    docs: `${process.env.APP_URL || "https://jiosaavn-api.vercel.app"}/docs`,
  });
};
