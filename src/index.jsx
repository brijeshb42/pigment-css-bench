/* global document */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import SierpinskiTriangle from "./cases/SierpinskiTriangle";
import Tree from "./cases/Tree";
import implementations from "./impl";

async function prepareAndMount() {
  const result = await Promise.all(implementations);

  const createTestBlock = (fn) => {
    return result.reduce((testSetups, implementation) => {
      const { name, components, version } = implementation;
      const {
        Component,
        getComponentProps,
        sampleCount,
        Provider,
        benchmarkType,
      } = fn(components);

      testSetups[name] = {
        Component,
        getComponentProps,
        sampleCount,
        Provider,
        benchmarkType,
        version,
        name,
      };
      return testSetups;
    }, {});
  };

  const tests = {
    "Mount deep tree": createTestBlock((components) => ({
      benchmarkType: "mount",
      Component: Tree,
      getComponentProps: () => ({
        breadth: 2,
        components,
        depth: 7,
        id: 0,
        wrap: 1,
      }),
      Provider: components.Provider,
      sampleCount: 500,
    })),
    "Mount wide tree": createTestBlock((components) => ({
      benchmarkType: "mount",
      Component: Tree,
      getComponentProps: () => ({
        breadth: 6,
        components,
        depth: 3,
        id: 0,
        wrap: 2,
      }),
      Provider: components.Provider,
      sampleCount: 500,
    })),
    "Update dynamic styles": createTestBlock((components) => ({
      benchmarkType: "update",
      Component: SierpinskiTriangle,
      getComponentProps: ({ cycle }) => {
        return { components, s: 200, renderCount: cycle, x: 0, y: 0 };
      },
      Provider: components.Provider,
      sampleCount: 1000,
    })),
  };

  const root = createRoot(document.querySelector(".root"));
  root.render(<App tests={tests} />);
}

prepareAndMount().finally(() => {
  console.log("Mounted");
});
