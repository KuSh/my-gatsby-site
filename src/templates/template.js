import { globalHistory } from "@gatsbyjs/reach-router";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { Link } from "gatsby";
import React from "react";

const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "InstrumentationKey=main",
    disableInstrumentationKeyValidation: true,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: {
        history: globalHistory,
      },
    },
    enableAjaxErrorStatusText: true,
    enableAjaxPerfTracking: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    enableUnhandledPromiseRejectionTracking: true,
  },
});
appInsights.loadAppInsights();

const TemplatePage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/1">to 1</Link>
          </li>
          <li>
            <Link to="/2">to 2</Link>
          </li>
          <li>
            <Link to="/3">to 3</Link>
          </li>
          <li>
            <Link to="/4">to 4</Link>
          </li>
          <li>
            <Link to="/5">to 5</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>You're on {window.location.pathname}</h1>
      </main>
    </>
  );
};

export default TemplatePage;
