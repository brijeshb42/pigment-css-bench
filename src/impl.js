import packageJson from "../package.json";

// const context = require.context('./implementations/', true, /index\.js$/);
const context = import.meta.glob("./implementations/*/index.js");
const { dependencies } = packageJson;

const dependencyMap = {
  emotion: "@emotion/styled",
  "pigment-css": "@pigment-css/react",
};

const toImplementations = (context) =>
  Object.keys(context).map(async (path) => {
    const components = (await context[path]()).default;
    const name = path.split("/")[2];
    const version = dependencies[dependencyMap[name] || name] || "";
    return { components, name, version };
  });

export default toImplementations(context);
