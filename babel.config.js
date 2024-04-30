const { BABEL_ENV, NODE_ENV } = process.env;
const modules = BABEL_ENV === "cjs" || NODE_ENV === "test" ? "commonjs" : false;

const defaultPresets = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: NODE_ENV === "test" ? { node: "current" } : undefined,
        loose: true,
        modules,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
};

module.exports = {
  presets: defaultPresets.presets,
  plugins: [
    ["styled-jsx/babel", { optimizeForSpeed: true }],
    [
      "module-resolver",
      {
        alias: {
          "^react-native$": "react-native-web",
        },
      },
    ],
  ],
};
